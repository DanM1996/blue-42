const router = require('express').Router();
const express = require('express');

const homeRoutes =require('./home-routes');

const apiRoutes = require('./api-routes');
const userRoutes = require('./user-routes');

router.use(express.json())

router.use(homeRoutes);

router.use('/api', apiRoutes,);
router.use('/user', userRoutes,);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
