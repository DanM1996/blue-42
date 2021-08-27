//Server variables
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Blue42!')
})
//Run Server Command
app.listen(port, () => {
  console.log(`Blue42 listening at http://localhost:${port}`)
})

//API Modules
const { fbsList, fbsGames } = require('./lib/apiCalls');
let fbsListyear = "2020"
fbsList(fbsListyear);
let fbsGamesYear = "2020"
fbsGames(fbsGamesYear);
