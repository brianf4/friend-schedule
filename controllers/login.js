const passport = require("passport");
const validator = require("validator");

module.exports = {
    getLoginPage: async (req, res) => {
        try {
            res.render("pages/login.ejs");
        } catch (err) {
            console.log(err);
        }
    },
    postLogin: (req, res) => {
        const validationErrors = [];
        if (!validator.isEmail(req.body.email))
            validationErrors.push({ msg: "Please enter a valid email address." });

        if (validator.isEmpty(req.body.password))
            validationErrors.push({ msg: "Password cannot be blank." });

        if (validationErrors.length) {
            req.flash("errors", validationErrors);
            return res.redirect("/login");
        }
        
        req.body.email = validator.normalizeEmail(req.body.email, {
            gmail_remove_dots: false,
        });
    }
};