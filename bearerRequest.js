// .ENV contains our secure credential information as well as the basic URL for our bearer token call
require('dotenv').config();

// formats our credentials as a Base64 string for use in the API call
const credentials = btoa(`${process.env.ACCOUNT}:${process.env.CREDENTIAL}`)
const url = process.env.URL

async function getToken(url) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
        },
        redirect: 'follow'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('error', error))
}



//getToken(url)
module.exports = getToken(url);
//export default getToken;