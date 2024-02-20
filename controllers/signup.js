module.exports = {
    getSignupPage: (req, res) => {
        try {
            res.render("pages/signup.ejs");
        } catch (err) {
            console.log(err);
        }
    },
};