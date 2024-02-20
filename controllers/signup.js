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
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
      });

      res.redirect("/");

    //   User.findOne(
    //     { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    //     (err, existingUser) => {
    //       if (err) {
    //         return next(err);
    //       }
    //       if (existingUser) {
    //         req.flash("errors", {
    //           msg: "Account with that email address or username already exists.",
    //         });
    //         return res.redirect("../signup");
    //       }
    //       user.save((err) => {
    //         if (err) {
    //           return next(err);
    //         }
    //         req.logIn(user, (err) => {
    //           if (err) {
    //             return next(err);
    //           }
    //           res.redirect("/");
    //         });
    //       });
    //     }
    //   );
    } catch (err) {}
  },
};
