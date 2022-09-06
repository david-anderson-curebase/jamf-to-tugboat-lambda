var fs = require('fs');
require('dotenv').config();

let bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhdGVkLWFwcCI6IkdFTkVSSUMiLCJhdXRoZW50aWNhdGlvbi10eXBlIjoiSlNTIiwiZ3JvdXBzIjpbXSwic3ViamVjdC10eXBlIjoiSlNTX1VTRVJfSUQiLCJ0b2tlbi11dWlkIjoiY2U1ODM2ZjYtNTUxZC00ODcwLTkyZTctYmU1NzMxZWRkMDVkIiwibGRhcC1zZXJ2ZXItaWQiOi0xLCJzdWIiOiIxNSIsImV4cCI6MTY2MjQ5MjQwNH0.W-m0dLj8-i3fgtfI9P-ohp0gs20LrGBlsYxaDo2X6vo';

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
    .then(data => fs.writeFile(`${path}.json`, data, function (err) {
        if (err) throw err;
        console.log("yo yo yo.")
    }))
    .catch(error => console.log('error', error))
}

exports.message = 'hola!'
exports.function = getReport();
