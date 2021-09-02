const router = require("express").Router();
const authGuard = require('../utils/auth');
const teamsAvailable = require ('../LiveAPIData/FbsTeams_data.json');

router.all("*", function (req, res, next) {
    console.log(req.url);
    console.log(JSON.stringify(req.body));
    next();
 });

router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/', (req, res) => {
    res.render('homepage');
})
router.get('/dashboard', authGuard, (req, res) => {
    res.render('dashboard');
})
router.get('/pickteams', (req, res) => {
    res.render('pick-teams', {teamsAvailable: teamsAvailable})
})



module.exports = router;