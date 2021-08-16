import React from 'react'
import { Link } from 'react-router-dom'
import { urlAlbumes } from '../../utils/endpoints';
import { confirmar } from '../../utils/confirmar';

export const AlbumCard = ({id, nombre, artista, year, imagen, onDelete}) => {

    const handleDelete = async (id) => {

        try{

            const url = `${urlAlbumes}/${id}`;

            const response = await fetch(url, {
                method: 'DELETE'
            });

            if(response.ok)
                onDelete();
    
        } catch( error )
        {
            console.log(error);
        }
    };
    
    return (
        <div className="col mb-4">
            <div className="card" style={{ maxWidth: 450 }}>
                <div className="row no-gutters">
                    <div className="col-md-4 ">
                        <img src={ imagen === "" ? "./assets/no-disponible.jpg" : imagen } 
                             className="card-img img-fluid" alt="Portada"/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{ nombre }</h5>
                            <p className="card-text">{ artista }</p>
                            <p className="card-text">
                                <small className="text-muted">{ year }</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-1">                    
                        <Link to={`./albumes/${id}`} className="btn btn-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        </Link>
                        <button type="button" className="btn btn-block" onClick={ () => confirmar(() => handleDelete(id)) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>                
        </div>
    )
}
