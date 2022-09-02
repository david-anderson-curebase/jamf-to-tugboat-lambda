var fs = require('fs');
require('dotenv').config();

let bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhdGVkLWFwcCI6IkdFTkVSSUMiLCJhdXRoZW50aWNhdGlvbi10eXBlIjoiSlNTIiwiZ3JvdXBzIjpbXSwic3ViamVjdC10eXBlIjoiSlNTX1VTRVJfSUQiLCJ0b2tlbi11dWlkIjoiNTRkYjNjNzctNWMyZi00YjZjLWJlYTUtMmZjYzM4ZmVhNjI0IiwibGRhcC1zZXJ2ZXItaWQiOi0xLCJzdWIiOiIxNSIsImV4cCI6MTY2MjE2MjQ1OX0.znOXhwXtQmlrfphqdFIk9V0R9zHODFfN7H0JsY5Q_5c';

const url = 'https://curebase.jamfcloud.com/JSSResource/'
const path = 'computerreports'
const full_path = url + path
const headers = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
    },
    redirect: 'follow'
}



function getReport(url) {
    fetch(full_path, headers)
    .then(res => res.text())
    //.then(data => bearerToken = data)
    .then(data => fs.writeFile(`${path}.json`, data, function (err) {
        if (err) throw err;
        console.log("Peep This.")
    }))
    .catch(error => console.log('error', error))
}

getReport(url);

