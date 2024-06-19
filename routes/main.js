const express = require('express');
const router = express.Router()
const mainController = require('../controllers/main')
const { ensureAuthenticated, forwardAuthenticated } = require("../middleware/auth");

router.get('/', mainController.getIndex);
router.get('/signup', forwardAuthenticated, mainController.getSignupPage);
router.post('/signup', mainController.postSignup);
router.get('/login', forwardAuthenticated, mainController.getLoginPage);
router.post('/login', mainController.postLogin);
router.get('/logout', mainController.logout);
router.get('/profile', ensureAuthenticated, mainController.getProfile);


module.exports = router;