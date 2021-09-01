const express = require('express');
const router = express.Router();
const Team = require('../models/teams');
const db = require('../config/connection')
const Teams = require('../models/teams');

//--Routes
//=============================================================

// GET route for getting all of the Teams
router.get('/Teams', (req, res) => 
  Teams.findAll({}).then(dbTeam => {
    console.log(dbTeam)
    res.json(dbTeam);
  })
  .catch(err => console.log(err)));

// POST route for saving a new Team
router.post('/Teams', (req, res) => {
  Team.create({
        title: req.body.title,
        pick1: req.body.pick1,
        pick2: req.body.pick2,
        pick3: req.body.pick3,
        pick4: req.body.pick4,
        pick5: req.body.pick5,
        weekPoints: req.body.weekPoints,
        totalPoints: req.body.totalPoints
  }).then(dbTeam => {
    res.json(dbTeam);
  });
});

// DELETE route for deleting a Team
router.delete('/Teams/:title', (req, res) => {
  Team.destroy({
    where: {
        title: req.body.title,
        pick1: req.body.pick1,
        pick2: req.body.pick2,
        pick3: req.body.pick3,
        pick4: req.body.pick4,
        pick5: req.body.pick5,
        weekPoints: req.body.weekPoints,
        totalPoints: req.body.totalPoints
    }
  }).then(dbTeam => {
    res.json(dbTeam);
  });
});

// PUT route for updating a Team
router.put('/Teams/:title', (req, res) => {
  Team.update(
    {
        title: req.body.title,
        pick1: req.body.pick1,
        pick2: req.body.pick2,
        pick3: req.body.pick3,
        pick4: req.body.pick4,
        pick5: req.body.pick5,
        weekPoints: req.body.weekPoints,
        totalPoints: req.body.totalPoints
    },
    {
      where: {
        title: req.params.title
      }
    }
  ).then(dbTeam => {
    res.json(dbTeam);
  });
});

module.exports = router;
