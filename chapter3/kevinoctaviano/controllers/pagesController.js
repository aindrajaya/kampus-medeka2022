// controllers/pagesController.js

const { Articles } = require("../models/index");

exports.home = (req, res) => {
    const title = "Halaman Index";
    const subTitle = "Ini subtitle halaman index";
    res.render('index', {title, subTitle});
}

exports.articles = (req, res) => {
    Articles.findAll().then(articles => {
        res.render('articles', {title: "Articles", articles});
    });
};