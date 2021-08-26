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

//API Call

// - FBS team list
var apiInstance = new cfb.TeamsApi();
var opts = { 
  'year': 2021 // Number | Year filter
};

apiInstance.getFbsTeams(opts)
.then(function(data){
//     return data.json();})
 //   .then(function(response) {
    console.log('API called successfully. Returned data: ' + data[0].id);
    //fs.writeFileSync("./data.json", JSON.stringify(data[0], null, 2));
}, function(error) {
    console.error(error);
})







// ​/teams​/fbs
// - FBS team list

// ​/teams​/fbs
// - FBS team list



