const User = require('../models/User');
const passport = require("passport");
// const LocalStrategy = require('passport-local');
// const crypto = require('crypto');
const bcrypt = require('bcrypt');



exports.postSignup = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req,body.password);

    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
    })
    
  } catch (error) {
    console.log(error);
  }
};












// router.post('/signup', function (req, res, next) {
    
// });
