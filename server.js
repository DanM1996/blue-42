//Server variables
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  }


const teamsAvailable = require ('./LiveApiData/FbsTeams_data.json');


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
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
app.get('/pickteams', (req, res) => {
    res.render('pick-teams', {teamsAvailable: teamsAvailable});
})
app.listen(PORT, () => console.log('Now listening'));
app.use(require('./controllers/'));

//API Modules
const { fbsList, fbsGames } = require('./lib/apiCalls');
//const sequelize = require('./config/connection');
let fbsListyear = "2021"
fbsList(fbsListyear);
let fbsGamesYear = "2021"
fbsGames(fbsGamesYear);

