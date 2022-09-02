// .ENV contains our secure credential information as well as the basic URL for our bearer token call
require('dotenv').config();
var fs = require('fs');
// formats our credentials as a Base64 string for use in the API call
const credentials = btoa(`${process.env.ACCOUNT}:${process.env.CREDENTIAL}`);
const url = process.env.URL;
const headers = {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Authorization': `Basic ${credentials}`
    },
    redirect: 'follow'
};


function getToken() {
    fetch(url, headers)
    .then(res => res.json())
    .then(data => fs.writeFile('bearer_token', data.token, function (err) {
        if (err) throw err;
        console.log("Peep This.")
    }))
    .catch(error => console.log('error', error))
}

getToken();
//export default getToken;