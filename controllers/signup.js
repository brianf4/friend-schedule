const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  getSignupPage: (req, res) => {
    try {
      res.render("pages/signup.ejs");
    } catch (err) {
      console.log(err);
    }
  },

  postSignup: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req, body.password);

      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
      });
    } catch (err) {}
  },
};
