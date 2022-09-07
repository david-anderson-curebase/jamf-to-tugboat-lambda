import fetch, { FormData, fileFromSync } from 'node-fetch';
import { getTimestamp } from './GetTimestamp.js'
import { reportsArray } from './variables.js'
import dotenv from 'dotenv';
dotenv.config()


const fileReports = () => {
    for (let i = 0; i < reportsArray.length; i++) {
        const form = new FormData();
        form.append('collected', getTimestamp());
        form.append('file', fileFromSync(`./reports/${reportsArray[i].name}.json`));
        
        for (let i = 0; i < fileReports.length; i++)
        fetch('https://openapi.tugboatlogic.com/api/v0/evidence/collector/26148/', {
            method: 'POST',
            headers: {
                'X-API-KEY': `${process.env.TUGBOAT_X_API_KEY}`,
                'Authorization': 'Basic ' + btoa(`${process.env.TUGBOAT_USERNAME}:${process.env.TUGBOAT_PASSWORD}`)
            },
            body: form
        });
}};

console.log(reportsArray[0].name);

//fileReports();