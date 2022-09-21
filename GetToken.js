import { bearerHeaders } from './variables.js';

function printData(data) {
    console.log(`Your data: ${data}`)
}

function getToken(cb) {
    fetch('https://curebase.jamfcloud.com/api/v1/auth/token', bearerHeaders)
    .then(res => res.json())
    .then(data => cb(data.token))
    .catch(error => console.log('error', error))
}
export { getToken };