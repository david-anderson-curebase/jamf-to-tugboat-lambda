import fs from 'fs';
import { reportsArray } from './variables.js';
//import { fileReport } from './FileReport.js';

function getReports(token) {
    const headers = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        redirect: 'follow'
    }
    for (let i = 0; i < reportsArray.length; i++) {
        fetch(reportsArray[i].source, headers)
        .then(res => res.text())
        .then(data => fs.writeFile(`./reports/${reportsArray[i].name}.json`, data, function (err) {
            if (err) throw err;
        }))
        //.then((fileReport(i)))
        .catch(error => console.log('error', error))
}};

getReports();

export { getReports };