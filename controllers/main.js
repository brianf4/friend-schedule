const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const validator = require("validator");

module.exports = {
  getIndex: async (req, res) => {
    try {
      res.render("pages/index.ejs");
    } catch (err) {
      console.log(err);
    }
  },

  getProfile: async (req, res) => {
    try {
      res.render("pages/profile.ejs", { user: req.user })
    } catch (err) {
      console.log(err)
    }
  },

  getSignupPage: (req, res) => {
    try {
      res.render("pages/signup.ejs");
    } catch (err) {
      console.log(err);
    }
  },

  logout: (req, res) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  },

  postSignup: async (req, res, next) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      
      req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
      });

      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
      });

      const existingUser = await User.findOne(
        {
          $or: [{ email: req.body.email }, { userName: req.body.userName }]
        },
      );

      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("/signup");
      } else {
        await user.save()
        res.redirect('/login')
      }

    } catch (err) {
      console.log(err)
    }
  },

  getLoginPage: async (req, res) => {
    try {
      res.render("pages/login.ejs");
    } catch (err) {
      console.log(err);
    }
  },

  postLogin: (req, res, next) => {
    const validationErrors = [];

    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });

    if (validator.isEmpty(req.body.password))
      validationErrors.push({ msg: "Password cannot be blank." });

    if (validationErrors.length) {
      req.flash("errors", validationErrors);
      console.log({ validationErrors });
      return res.redirect("/login");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        req.flash("errors", info);
        return res.redirect("/login");
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", { msg: "Success! You are logged in." });
        
        res.redirect(req.session.returnTo || "/profile");
      });
    })(req, res, next);
  }
};
