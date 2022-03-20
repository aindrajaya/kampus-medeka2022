const { Article } = require("../models/index");

exports.home = (req, res) => {
    const title = "Hello World",
        subTitle = "Welcome to the world!";

res.render ("index", { title, subTitle});
};

exports.articles = (req, res) => {
    Article.findAll().then(articles => {
        res.render("articles", { title: "Articles", articles});
    });
};

// const articles = (req, res) => {
//     Article.findAll().then(articles => {
//         res.render("articles", { title: "Articles", articles});
//     });
// };
// const home = (req, res) => {
//     const title = "Hello World",
//         subTitle = "Welcome to the world!";
//     res.render ("index", { title, subTitle});
// };
// module.exports = {home, articles}