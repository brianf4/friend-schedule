const express = require('express');
const router = express.Router()
const signinController = require('../controllers/signin')

router.get('/', signinController.getSigninPage);

module.exports = router;