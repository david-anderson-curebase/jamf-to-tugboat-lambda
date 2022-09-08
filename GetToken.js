import { fileReport } from './FileReport.js';
import { bearerHeaders } from './variables.js';
import { getReports } from './GetReports.js';

function getToken() {
    fetch('https://curebase.jamfcloud.com/api/v1/auth/token', bearerHeaders)
    .then(res => res.json())
    .then(data => data.token)
    .then(token => getReports(token))
    .catch(error => console.log('error', error))
}
getToken();
export { getToken };