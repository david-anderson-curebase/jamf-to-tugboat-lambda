import fs from 'fs';
import { reportsArray } from './variables.js';

const url = 'https://curebase.jamfcloud.com/JSSResource/computerreports/id/'
const path = 'TBLSoftwareInventoryPopulation'
const full_path = url + path
//const reportsArray = [2, 3, 10]

function getReportz(token) {
    
    const headers = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        redirect: 'follow'
    }
    for (let i = 0; i < reportsArray.length; i++) {
        fetch(url + reportsArray[i].id, headers)
        .then(res => res.text())
        .then(data => fs.writeFile(`./reports/${reportsArray[i].name}.json`, data, function (err) {
            if (err) throw err;
            console.log("yo yo yo.")
        }))
        .catch(error => console.log('error', error))
}};

export { getReportz };