import { bearerHeaders } from './variables.js';

function getToken() {
    fetch('https://curebase.jamfcloud.com/api/v1/auth/token', bearerHeaders)
    .then(res => res.json())
    .then(data => data.token)
    .catch(error => console.log('error', error))
}
export { getToken };