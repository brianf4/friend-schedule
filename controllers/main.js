const Movie = require('../models/movie');

module.exports = {
    getIndex: async (req, res) => {
        try {
            const movie = await Movie.find({}, { plot: 1, title: 1, poster: 1, _id: 0,}).limit(4);
            console.log(movie)
            res.render("pages/index.ejs", {movies: movie});
        } catch (err) {
            console.log(err);
        }
    },
};