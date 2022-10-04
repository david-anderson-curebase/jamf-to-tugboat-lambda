import { reportsArray } from './variables.js';

function getReport(token, i) {
    const headers = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        redirect: 'follow'
    }
    fetch(reportsArray[i].source, headers)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log('error', error))
}

export { getReport };