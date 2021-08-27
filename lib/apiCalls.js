//---cfbd Varialbes---
const cfbdKey = "eM6K7uh6WiH7Oh9WhWsby/tgTztc561eiaAtNxFO8+/NKF0YkLnXxPPwbBuG34S4";
const cfb = require('cfb.js');
const fs = require('fs')


//---cfbd API Config---
const defaultClient = cfb.ApiClient.instance;
const ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "Bearer " + cfbdKey;


//---API Calls---

//--FBS team list--
function fbsList(fbsListYear) {
    let apiInstance = new cfb.TeamsApi();
    let opts = { 
    'year': fbsListYear // Number | Year filter
    };

    apiInstance.getFbsTeams(opts)
    .then(function(data){
        console.log('API called successfully. Returned data: ' + data);
        //console.log('API called successfully. Returned data: ' + data[0].id);
        fs.writeFileSync("./ExampleData/FbsTeams_data.json", JSON.stringify(data, null, 2));
        return data;
    }, function(error) {
        console.error(error);
    })
}


//---Games list--
function fbsGames(fbsGamesYear//, fbsGamesID
    ) {
    let apiInstance = new cfb.GamesApi();
    let year = fbsGamesYear; // Number | Year/season filter for games

    let opts = { 
    //   'week': 56, // Number | Week filter
    //   'seasonType': "regular", // String | Season type filter (regular or postseason)
    //   'team': "team_example", // String | Team
    //   'home': "home_example", // String | Home team filter
    //   'away': "away_example", // String | Away team filter
    //   'conference': "conference_example", // String | Conference abbreviation filter
    //  'id': fbsGamesID // Number | id filter for querying a single game
    };
    apiInstance.getGames(year, opts)
    .then(function(data){
        console.log('API called successfully. Returned data: ' + data);
        fs.writeFileSync("./ExampleData/Game_data.json", JSON.stringify(data, null, 2));
    }, function(error) {
        console.error(error);
    })
}


module.exports = {
    fbsList,
    fbsGames
  };