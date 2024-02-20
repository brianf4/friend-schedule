const express = require('express');
const router = express.Router()
const signupController = require('../controllers/signup')

router.get('/', signupController.getSignupPage);
router.post('/', signupController.postSignup);

module.exports = router;