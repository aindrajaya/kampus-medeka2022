// controllers/pagesController.js
exports.home = (req, res) => {
    const title = "Halaman Index";
    const subTitle = "Ini subtitle halaman index";
    res.render('index', {title, subTitle});
}