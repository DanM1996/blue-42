//Server variables
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.send('Hello Blue42!')
})
//Run Server Command
app.listen(port, () => {
  console.log(`Blue42 listening at http://localhost:${port}`)
})

//cfbd Varialbes for Testing
const cfbdKey = "eM6K7uh6WiH7Oh9WhWsby/tgTztc561eiaAtNxFO8+/NKF0YkLnXxPPwbBuG34S4";
const cfb = require('cfb.js');

// cfbd API Config  
const defaultClient = cfb.ApiClient.instance;
const ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "Bearer " + cfbdKey;

//---API Calls---

//--FBS team list--
function fbsList() {
    let apiInstance = new cfb.TeamsApi();
    let opts = { 
    'year': 2021 // Number | Year filter
    };

    apiInstance.getFbsTeams(opts)
    .then(function(data){
        console.log('API called successfully. Returned data: ' + data[0].id);
        //fs.writeFileSync("./data.json", JSON.stringify(data[0], null, 2));
    }, function(error) {
        console.error(error);
    })
}

fbsList(); 

//-- Games list--
function games() {
    let apiInstance = new cfb.GamesApi();
    var year = 20; // Number | Year/season filter for games

    var opts = { 
      'week': 56, // Number | Week filter
      'seasonType': "regular", // String | Season type filter (regular or postseason)
      'team': "team_example", // String | Team
      'home': "home_example", // String | Home team filter
      'away': "away_example", // String | Away team filter
      'conference': "conference_example", // String | Conference abbreviation filter
      'id': 56 // Number | id filter for querying a single game
    };
    apiInstance.getGames(year, opts)
    .then(function(data){
        console.log('API called successfully. Returned data: ' + data[0].id);
        //fs.writeFileSync("./ExampleData/Game_data.json", JSON.stringify(data[0], null, 2));
    }, function(error) {
        console.error(error);
    })
}

games(); 