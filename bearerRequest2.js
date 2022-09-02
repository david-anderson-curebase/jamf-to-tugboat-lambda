// .ENV contains our secure credential information as well as the basic URL for our bearer token call
require('dotenv').config();

// formats our credentials as a Base64 string for use in the API call
const credentials = btoa(`${process.env.ACCOUNT}:${process.env.CREDENTIAL}`)
const url = process.env.URL
const headers = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
    },
    redirect: 'follow'
}


let bearerToken = [];
function getToken(url) {
    fetch(url, headers)
    .then(res => res.json())
    .then(data => bearerToken = data)
    .then(() => console.log(`Bearer Token: ${bearerToken.token}`))
    .catch(error => console.log('error', error))
}

//getToken(url)
exports.getFunction = getToken(url);
//export default getToken;