const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();


const router = express.Router();

const axios = require('axios');

//search query
let searchQuery = '';

// get search from giphy
router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchQuery}`)
        .then(response => {
            res.send(response.data);
        }).catch(err => {
            console.log(err);
        })
})

router.post('/', (req, res) => {
    searchQuery = req.body.searchQuery;
    res.sendStatus(201);
})


module.exports = router;