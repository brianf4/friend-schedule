module.exports = {
    getSignupPage: async (req, res) => {
        try {
            res.render("pages/signup.ejs");
        } catch (err) {
            console.log(err);
        }
    },
};