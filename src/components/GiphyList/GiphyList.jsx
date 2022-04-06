import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';

function GiphyList() {

    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

            const getGiphy = () => {
            axios.get('/api/giphy')
                .then(response => {
                console.log(response.data);
                console.log(response.data?.data[0].images.original.url);
                setSearchResults(response.data.data);
                // dispatch ({type: 'SET_GIPHY', payload: response.data})
                }).catch((err) => {
                console.log(err);
                })
            }

            useEffect(() => {
            getGiphy();
            }, []);

    return (
        <>
               {searchResults.map((picture, i) => {
                    return (<img width="200px" height="200px" key={i} src={picture.images.original.url} />)
                })}
            
        </>
    )
}

export default GiphyList;