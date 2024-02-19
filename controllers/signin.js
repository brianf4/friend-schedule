module.exports = {
    getSigninPage: async (req, res) => {
        try {
            res.render("pages/signin.ejs");
        } catch (err) {
            console.log(err);
        }
    },
};