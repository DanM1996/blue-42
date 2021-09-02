const Rosters = require('../models/teams');
const sequelize = require('../config/connection');

const teamdata = [
  {
    title: 'Alex',
    school1: 2005,
    school2: 'Ohio State',
    school3: 'University of Ohio',
    school4: 'Cincinati',
    school5: 'Bowling Green',
    weekPoints: 0,
    totalPoints: 0
  },
  {
    title: 'Taylor',
    school1: 'University of Miami',
    school2: 'Florida State',
    school3: 'University of Central Florida',
    school4: 'Florida State University',
    school5: 'Duke University',
    weekPoints: 0,
    totalPoints: 0
  },
  {
    title: 'Eddie',
    school1: 'University of Notre Dame',
    school2: 'Virgina Tech',
    school3: 'Oklahoma State',
    school4: 'University of Oklahoma',
    school5: 'University of Texas',
    weekPoints: 0,
    totalPoints: 0
  },
  {
    title: 'Patrick',
    school1: 'Georgia',
    school2: 'Air Force',
    school3: 'Memphis Tigers',
    school4: 'Navy Midshipmen',
    school5: 'SMU Mustangs',
    weekPoints: 0,
    totalPoints: 0
  },
  {
    title: 'Daniel',
    school1: 'Alabama',
    school2: 'Arkansas Razorbacks',
    school3: 'Auburn Tigers',
    school4: 'LSU Tigers',
    school5: 'Kent State Golden Flashes',
    weekPoints: 0,
    totalPoints: 0
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Rosters.bulkCreate(teamdata);
  })
  .then(dbTeamData => {
    console.log('Teams seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
