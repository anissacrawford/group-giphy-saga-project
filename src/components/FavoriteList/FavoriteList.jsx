import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoriteList() {

    const favorites = useSelector(store => store.favoriteReducer);
    const dispatch = useDispatch();

    const getFavorites = () => {
        axios.get('/api/favorite')
            .then(response => {
                console.log(response.data);
                // console.log(response.data?.data[0].images.original.url);
                // setSearchResults(response.data.data);
                dispatch({ type: 'GET_FAVORITE', payload: response.data })
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <>
            <div>{favorites.map((favorite) => {
                return ( <FavoriteItem key={favorite.id} favorite={favorite} /> )})} </div>

        </>
    )
}

export default FavoriteList;
