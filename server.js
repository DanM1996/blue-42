const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/', (req, res) => {
    res.render('homepage');
})
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})
app.listen(PORT, () => console.log('Now listening'));