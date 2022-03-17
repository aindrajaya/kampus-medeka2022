exports.home = (req, res) => {
    const title = 'Welcome to my Express App',
        subTitle = 'My Name is Jhon';

    res.render('index', { title, subTitle });
};