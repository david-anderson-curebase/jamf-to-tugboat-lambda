require('dotenv').config();
let bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhdGVkLWFwcCI6IkdFTkVSSUMiLCJhdXRoZW50aWNhdGlvbi10eXBlIjoiSlNTIiwiZ3JvdXBzIjpbXSwic3ViamVjdC10eXBlIjoiSlNTX1VTRVJfSUQiLCJ0b2tlbi11dWlkIjoiNzA4M2ZhMmItM2Q3OC00OGViLWIzN2ItYzk5MTBkNzg1YTUzIiwibGRhcC1zZXJ2ZXItaWQiOi0xLCJzdWIiOiIxNSIsImV4cCI6MTY2MjE2MDYxNn0.owvoxL5lGwYo5phh2koMqRlE2OE5xPhNJbwnB-IbCKw';

const url = 'https://curebase.jamfcloud.com/JSSResource/advancedcomputersearches'
const headers = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
    },
    redirect: 'follow'
}



function getReport(url) {
    fetch(url, headers)
    .then(res => res.text())
    //.then(data => bearerToken = data)
    .then(data => console.log(data))
    .catch(error => console.log('error', error))
}

getReport(url);