const express = require('express');
const router = express.Router()
const signupController = require('../controllers/signup')

router.get('/', signupController.getSignupPage);
router.get('/', );

module.exports = router;