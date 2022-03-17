const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const title = "Express"
    res.render('main', {title});
});

app.get('/about', (req, res) => {
    const name = "Kevin";
    const title = "Halaman About";
    res.render('about', {name, title});
})

app.listen(port, console.log(`Listening to http://localhost:${port}`));