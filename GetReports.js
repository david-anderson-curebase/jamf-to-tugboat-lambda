require('dotenv').config();
let bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhdGVkLWFwcCI6IkdFTkVSSUMiLCJhdXRoZW50aWNhdGlvbi10eXBlIjoiSlNTIiwiZ3JvdXBzIjpbXSwic3ViamVjdC10eXBlIjoiSlNTX1VTRVJfSUQiLCJ0b2tlbi11dWlkIjoiZDNjYjZkYzMtMGU4ZC00YjIyLWEyZWYtZGQ2Y2Q1NDFhNDI0IiwibGRhcC1zZXJ2ZXItaWQiOi0xLCJzdWIiOiIxNSIsImV4cCI6MTY2MjE1ODcwMH0.rxS3ThenOBQVzrBcLqnFV76AyPyH8n7FJHyTTE17ct8';

const url = 'https://curebase.jamfcloud.com/JSSResource/advancedcomputersearches?='
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