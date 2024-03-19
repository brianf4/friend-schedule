module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log('True!')
            return next();
        } else {
            console.log('Not True!')
            res.redirect("/");
        }
    },
    ensureGuest: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        } else {
            res.redirect("/dashboard");
        }
    },
};