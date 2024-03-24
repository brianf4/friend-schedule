const express = require('express');
const router = express.Router()
const mainController = require('../controllers/main')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', mainController.getIndex);
router.get('/signup', mainController.getSignupPage);
router.post('/signup', mainController.postSignup);
router.get('/login', mainController.getLoginPage);
router.post('/login', mainController.postLogin);
router.get('/logout', mainController.logout);
router.get('/profile', ensureAuth, mainController.getProfile);


module.exports = router;