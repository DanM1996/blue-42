const sequelize = require('./config/connection');
const path = require('path');
const router = require('./routes');
const session = require('express-session');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const PORT = process.env.PORT || 3001;
const teamsAvailable = require ('./LiveAPIData/FbsTeams_data.json')

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

//API Modules
const { fbsList, fbsGames } = require('./lib/apiCalls');
let fbsListyear = "2021"
fbsList(fbsListyear);
let fbsGamesYear = "2021"
fbsGames(fbsGamesYear);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Database synced'));
    console.log('Listening...');
});