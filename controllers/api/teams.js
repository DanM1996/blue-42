const express = require('express');
const router = express.Router();
//const Team = require('../models/teams');
//const sequelize = require('../config/connection')
const Teams = require('../../models/Teams');

//--Eddie Routes
//=============================================================

// GET route for getting all of the Teams
router.get('/', (req, res) =>
  Teams.findAll({}).then(dbTeam => {
    console.log(dbTeam)
    res.json(dbTeam);
  }).catch(err => console.log(err)));

// let { id, title, pick1, pick2, pick3, pick4, pick5, weekPoints, totalPoints } = data;

// //--insert
// router.post('/Teams', (req, res) => {
//   Teams.create({
//     id,
//     title,
//     pick1,
//     pick2,
//     pick3,
//     pick4,
//     pick5,
//     weekPoints,
//     totalPoints
//   }).then(dbTeam => {
//     console.log(dbTeam)
//     res.json(dbTeam);
//   }).catch(err => console.log(err));
// });

// //--Delete 
// router.delete('/Teams', (req, res) => {
//   Teams.destroy({
//     where: {
//       id,
//       title,
//       pick1,
//       pick2,
//       pick3,
//       pick4,
//       pick5,
//       weekPoints,
//       totalPoints
//     }
//   }).then(dbTeam => {
//     console.log(dbTeam)
//     res.json(dbTeam);
//   }).catch(err => console.log(err));
// });
// //--Put
// router.put('/Teams', (req, res) => {
//   Teams.update({
//     id,
//     title,
//     pick1,
//     pick2,
//     pick3,
//     pick4,
//     pick5,
//     weekPoints,
//     totalPoints
//   }).then(dbTeam => {
//     console.log(dbTeam)
//     res.json(dbTeam);
//   }).catch(err => console.log(err));
// });

// Original Routest
// PUT route for updating a Team
// router.put('/Teams/', (req, res) => {
//   Teams.update(
//     {   id: req.body.id,
//         title: req.body.title,
//         pick1: req.body.pick1,
//         pick2: req.body.pick2,
//         pick3: req.body.pick3,
//         pick4: req.body.pick4,
//         pick5: req.body.pick5,
//         weekPoints: req.body.weekPoints,
//         totalPoints: req.body.totalPoints
//     },
//     {
//       where: {
//         title: req.params.title
//       }
//     }
//   ).then(dbTeam => {
//     res.json(dbTeam);
//   });
// });

// // POST route for saving a new Team
// router.post('/Teams', (req, res) => {
//   Teams.create({
//         id: req.body.id,
//         title: req.body.title,
//         pick1: req.body.pick1,
//         pick2: req.body.pick2,
//         pick3: req.body.pick3,
//         pick4: req.body.pick4,
//         pick5: req.body.pick5,
//         weekPoints: req.body.weekPoints,
//         totalPoints: req.body.totalPoints
//   }).then(dbTeam => {
//     res.json(dbTeam);
//   });
// });

// // DELETE route for deleting a Team
// router.delete('/Teams/:title', (req, res) => {
//   Teams.destroy({
//     where: {
//         id: req.body.id,
//         title: req.body.title,
//         pick1: req.body.pick1,
//         pick2: req.body.pick2,
//         pick3: req.body.pick3,
//         pick4: req.body.pick4,
//         pick5: req.body.pick5,
//         weekPoints: req.body.weekPoints,
//         totalPoints: req.body.totalPoints
//     }
//   }).then(dbTeam => {
//     res.json(dbTeam);
//   });
// });

// // PUT route for updating a Team
// router.put('/Teams/:title', (req, res) => {
//   Teams.update(
//     {
//         id: req.body.id,
//         title: req.body.title,
//         pick1: req.body.pick1,
//         pick2: req.body.pick2,
//         pick3: req.body.pick3,
//         pick4: req.body.pick4,
//         pick5: req.body.pick5,
//         weekPoints: req.body.weekPoints,
//         totalPoints: req.body.totalPoints
//     },
//     {
//       where: {
//         title: req.params.title
//       }
//     }
//   ).then(dbTeam => {
//     res.json(dbTeam);
//   });
// });


module.exports = router;
