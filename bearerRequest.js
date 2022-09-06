// .ENV contains our secure credential information as well as the basic URL for our bearer token call
require('dotenv').config();
var fs = require('fs');
const { get } = require('http');
const getReport = require('./GetReport.js');
// formats our credentials as a Base64 string for use in the API call
const credentials = btoa(`${process.env.ACCOUNT}:${process.env.CREDENTIAL}`);
const url = process.env.TOKEN_URL;
const headers = {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Authorization': `Basic ${credentials}`
    },
    redirect: 'follow'
};

function getToken(url, headers) {
    let token;
    fetch(url, headers)
    .then(res => res.json())
    .then(data => data.token)
    //.then(data => cb(data))
    /*.then(data => fs.writeFile('bearer_token', data.token, function (err) {
        if (err) throw err;
        console.log("Peep This.")
    }))*/
    .catch(error => console.log('error', error))
}

/*let token = fs.readFile('bearer_token', "utf8", (err, data) => {
    console.log(data);
});*/

console.log(getReport.message)

//export default getToken;
/*exports.payload = getToken(url, headers);
exports.message = 'oi oi oi'*/