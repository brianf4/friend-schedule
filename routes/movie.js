const express = require('express');
const router = express.Router()
const movieController = require('../controllers/movie')

router.get('/', movieController.getMoviePage);

module.exports = router;