import fs from 'fs';
//import { fileReport } from './FileReport.js';
import { reportsArray } from './variables.js';

function getReports(token, cb) {
    const headers = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        redirect: 'follow'
    }
    for (let i = 0; i < reportsArray.length; i++) {
        //const p = new Promise((resolve, reject) => { fetch(reportsArray[i].source, headers) })
        //return p / console.log(p);
        fetch(reportsArray[i].source, headers)
        .then(res => res.method)
        .then(res => console.log(res))
        /*.then(data => fs.writeFile(`./reports/${reportsArray[i].name}.json`, data, function (err) {
            if (err) throw err;
        }))*/
        .then(res => cb(i, res))
        .catch(error => console.log('error', error))
}
};

export { getReports };