import fetch, { FormData, fileFromSync } from 'node-fetch';
import { getTimestamp } from './GetTimestamp.js'
import dotenv from 'dotenv';
dotenv.config()

const form = new FormData();
form.append('collected', getTimestamp());
form.append('file', fileFromSync('./reports/TBLSoftwareInventoryPopulation.json'));

fetch('https://openapi.tugboatlogic.com/api/v0/evidence/collector/26148/', {
    method: 'POST',
    headers: {
        'X-API-KEY': `${process.env.TUGBOAT_X_API_KEY}`,
        'Authorization': 'Basic ' + btoa(`${process.env.TUGBOAT_USERNAME}:${process.env.TUGBOAT_PASSWORD}`)
    },
    body: form
});

