import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AlbumCard } from './AlbumCard';
import { urlAlbumes } from '../../utils/endpoints';

export const AlbumList = () => {

    const [albumes, setAlbumes] = useState([]);
    
    useEffect(() => {
        cargarDatos();

    }, [])
    
    const cargarDatos = async () => {
    
        const response = await fetch(urlAlbumes);
        const data = await response.json();
    
        setAlbumes(data);
    };
    
    return (
        <div className="container-fluid ">
            <div className="mb-3 mt-5">
                <Link to="/albumes/crear" className="btn btn-outline-primary">Agregar disco</Link>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    albumes.map(album => (
                        <AlbumCard key={ album.id } {...album} onDelete={ cargarDatos } />
                    ))
                }
    
            </div>
        </div>
    )
}
