import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { years } from '../../utils/constantes';
import { urlAlbumes } from '../../utils/endpoints';

export const AlbumDetails = ({ history }) => {

    const { albumId } = useParams();

    const url = `${urlAlbumes}/${albumId}`;

    const [formValues, setFormValues] = useState({
        'id': 0,
        'nombre': '',
        'artista': '',
        'year': 2021,
        'imagen': ''
    });

    const { nombre, artista, year, imagen } = formValues;

    useEffect(() => {
        cargarAlbum();
    }, [albumId])
    
    const cargarAlbum = async () => {

        const response = await fetch(url);
        const data = await response.json();

        setFormValues(data);
    }

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleReturn = () => {

        history.push('/');
    }

    const handleSubmitForm = async (e) => {

        e.preventDefault();

        try {
            
            const response = await fetch(url, { 
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formValues)
            });

            if (!response.ok){
                throw new Error("Datos no válidos");

            } else {
                history.push('/');
            }

        } catch(error){

            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-3">Detalles del Album</h2>

            <form onSubmit={ handleSubmitForm }>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" 
                           placeholder="Escriba el nombre de su album"
                           value={ nombre }
                           onChange={ handleInputChange }/>                    
                </div>
                <div className="form-group">
                    <label htmlFor="artista">Artista</label>
                    <input type="text" className="form-control" id="artista" name="artista"
                           placeholder="Escriba el nombre de su artista"
                           value={ artista }
                           onChange={ handleInputChange }/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Año</label>
                    <select className="form-control" id="year" name="year" value={ year } onChange={ (e) => handleInputChange(e) }>
                        { years.map((year, i) => ( <option key={i}>{ year }</option> )) }                        
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">Imagen del album</label>
                    <input type="text" className="form-control" id="imagen" name="imagen"
                           placeholder="Ingrese la url de la imagen del album"
                           value={ imagen }
                           onChange={ handleInputChange }/>
                </div>

                <div className="form-group row mt-5">
                    <div className="col-12 text-right">
                        <button type="submit" className="btn btn-primary mr-2">Actualizar</button>
                        <button type="button" className="btn btn-secondary" onClick={ handleReturn }>Cancelar</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
