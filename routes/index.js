const router = require('express').Router();
const express = require('express');

const homeRoutes =require('./home-routes');
const userRoutes = require('./user-routes');
const apiRoutes = require('./api-routes');


router.use(express.json())

router.use(homeRoutes);
router.use('/user', userRoutes,);
router.use('/api', apiRoutes,);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
