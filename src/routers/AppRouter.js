import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AddAlbum } from '../components/albums/AddAlbum';
import { AlbumDetails } from '../components/albums/AlbumDetails';
import { AlbumList } from '../components/albums/AlbumList';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/albumes/crear" component={ AddAlbum } />
                <Route path="/albumes/:albumId" component={ AlbumDetails } />
                <Route path="/" component={ AlbumList }/>
            </Switch>
        </Router>
    )
}
