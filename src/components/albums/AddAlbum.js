import React, { useState } from 'react';
import { years } from '../../utils/constantes';
import { urlAlbumes } from '../../utils/endpoints';

export const AddAlbum = ({ history }) => {

    const [formValues, setFormValues] = useState({
        'nombre': '',
        'artista': '',
        'year': 2021,
        'imagen': ''
    })

    const { nombre, artista, year, imagen } = formValues;

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
            
            const response = await fetch(urlAlbumes, { 
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formValues)
            });

            const data = await response.json();

            if (!response.ok){
                console.log(data);
                throw new Error("Datos no válidos");
            }

            history.push('/');

        } catch(error){

            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-3">Crear Disco</h2>

            <form onSubmit={ handleSubmitForm }>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" 
                           placeholder="Escriba el nombre de su disco"
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
                           placeholder="Ingrese la url de la imagen del disco"
                           value={ imagen }
                           onChange={ handleInputChange }/>
                </div>

                <div className="form-group row mt-5">
                    <div className="col-12 text-right">
                        <button type="submit" className="btn btn-primary mr-2">Agregar</button>
                        <button type="button" className="btn btn-secondary" onClick={ handleReturn }>Cancelar</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
