const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const teamsRoutes = require('./teams');


router.use('/users', userRoutes);
router.use('/teams', teamsRoutes);

module.exports = router;
