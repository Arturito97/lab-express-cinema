const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res) => {
    try {
        const moviesFromDB = await Movie.find();
        res.render('movies', { moviesFromDB });
    } catch(e) {
        res.render('error');
        console.log(`An error ocured (${e})`);
    }
});

router.get('/movies/:id', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.render('movie-detail', {movie})
    } catch(e) {
        res.render('error');
        console.log(`An error ocured (${e})`);
    }
})


module.exports = router;