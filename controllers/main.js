module.exports = {
    getIndex: async (req, res) => {
        try {
            res.render("pages/index.ejs");
        } catch (err) {
            console.log(err);
        }
    },
};