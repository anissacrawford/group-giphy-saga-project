const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();


const router = express.Router();

const axios = require('axios');

// get search from giphy
router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=spongebob`)
        .then(response => {
            res.send(response.data);
        }).catch(err => {
            console.log(err);
        })
})


module.exports = router;