module.exports = {
    getLoginPage: async (req, res) => {
        try {
            res.render("pages/login.ejs");
        } catch (err) {
            console.log(err);
        }
    },
};