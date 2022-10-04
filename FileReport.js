import fetch, { FormData, fileFromSync } from 'node-fetch';
import { getTimestamp } from './GetTimestamp.js'
import { reportsArray } from './variables.js'
import dotenv from 'dotenv';
dotenv.config()

function fileReport(i, x) {
    const form = new FormData();
    form.append('collected', getTimestamp());
    form.append('file', x);
    fetch(`${reportsArray[i].dest}`, {
        method: 'POST',
        headers: {
            'X-API-KEY': `${process.env.TUGBOAT_X_API_KEY}`,
            'Authorization': 'Basic ' + btoa(`${process.env.TUGBOAT_USERNAME}:${process.env.TUGBOAT_PASSWORD}`),
        },
        body: form
    });
};

export { fileReport };