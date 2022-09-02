require('dotenv').config();
console.log(`Authorization URL: ${process.env.URL}`)
console.log(`Basic Authorization Account: ${process.env.ACCOUNT}`)
console.log(`Basic Authorization Credentials: ${process.env.CREDENTIAL}`)


/*const credentials = btoa('TugboatCaptain:PbuEqLYJjV30ITlfYawa');
const url = 'https://curebase.jamfcloud.com/api/v1/auth/token'

let bearerToken = [];

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
    .then(data => bearerToken.push(data))
    .then(data => console.log(data))
    .catch(error => console.log('error', error))
}



getToken(url)
console.log(bearerToken);*/
