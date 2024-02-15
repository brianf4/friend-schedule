const Movies = require('../models/movie');

module.exports = {
    getIndex: async (req, res) => {
        try {
            const movie = (await Movies.find({})).splice(0, 2)
            // console.log(movie);
            res.render("pages/movie.ejs", {movies: movie});
        } catch (err) {
            console.log(err);
        }
    },
};