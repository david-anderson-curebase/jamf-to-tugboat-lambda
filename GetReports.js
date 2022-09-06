var fs = require('fs');
var token = require('./BearerRequest.js')
require('dotenv').config();

let bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhdGVkLWFwcCI6IkdFTkVSSUMiLCJhdXRoZW50aWNhdGlvbi10eXBlIjoiSlNTIiwiZ3JvdXBzIjpbXSwic3ViamVjdC10eXBlIjoiSlNTX1VTRVJfSUQiLCJ0b2tlbi11dWlkIjoiY2U1ODM2ZjYtNTUxZC00ODcwLTkyZTctYmU1NzMxZWRkMDVkIiwibGRhcC1zZXJ2ZXItaWQiOi0xLCJzdWIiOiIxNSIsImV4cCI6MTY2MjQ5MjQwNH0.W-m0dLj8-i3fgtfI9P-ohp0gs20LrGBlsYxaDo2X6vo'
const url = 'https://curebase.jamfcloud.com/JSSResource/'
const path = 'computerreports'
const full_path = url + path



function getReports(token) {
    const headers = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        redirect: 'follow'
    }
    fetch(full_path, headers)
    .then(res => res.text())
    //.then(data => bearerToken = data)
    .then(data => fs.writeFile(`./reports/${path}.json`, data, function (err) {
        if (err) throw err;
        console.log("Peep This.")
    }))
    .catch(error => console.log('error', error))
}

getReports(url);
console.log(JSON.stringify(token.payload));
