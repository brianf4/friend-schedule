const Movie = require('../models/movie');

module.exports = {
    getMoviePage: async (req, res) => {
        try {
            const movies = await Movie.find({}, { plot: 1, title: 1, poster: 1, _id: 0,}).limit(4);
            
            res.render("pages/movies.ejs", {data: movies});
        } catch (err) {
            console.log(err);
        }
    },
};