import fetch, { FormData, fileFromSync } from 'node-fetch';
import { getTimestamp } from './GetTimestamp.js'
import { reportsArray } from './variables.js'
import dotenv from 'dotenv';
import { getReports } from './GetReports.js';
dotenv.config()


function fileReport(i) {
    for (let i=0; i < getReports.length; i++) {
    const form = new FormData();
    form.append('collected', getTimestamp());
    form.append('file', fileFromSync(`./reports/${reportsArray[i].name}.json`));
    fetch(`${reportsArray[i].dest}`, {
        method: 'POST',
        headers: {
            'X-API-KEY': `${process.env.TUGBOAT_X_API_KEY}`,
            'Authorization': 'Basic ' + btoa(`${process.env.TUGBOAT_USERNAME}:${process.env.TUGBOAT_PASSWORD}`)
        },
        body: form
    });
}};

export { fileReport };