const router = require('express').Router();
const Team = require('../models/team');

// Routes
// =============================================================

// GET route for getting all of the Teams
router.get('/api/Teams', (req, res) => {
  Team.findAll({}).then(dbTeam => {
    res.json(dbTeam);
  });
});

// POST route for saving a new Team
router.post('/api/Teams', (req, res) => {
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
router.delete('/api/Teams/:id', (req, res) => {
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
router.put('/api/Teams/:id', (req, res) => {
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
        id: req.params.id
      }
    }
  ).then(dbTeam => {
    res.json(dbTeam);
  });
});

module.exports = router;
