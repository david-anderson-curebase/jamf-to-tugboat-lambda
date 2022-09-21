import dotenv from 'dotenv';
dotenv.config()


const credentials = btoa(`${process.env.BEARER_ACCOUNT}:${process.env.BEARER_CREDENTIAL}`);
const bearerHeaders = {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Authorization': `Basic ${credentials}`
    },
    redirect: 'follow'
};

const jamfBearerURL = 'https://curebase.jamfcloud.com/api/v1/auth/token';
const jamfReportURL = 'https://curebase.jamfcloud.com/JSSResource/computerreports/id'

let reportsArray = [
    {'name': 'TugboatLogicFullInventorySearch', 'source': `${jamfReportURL}/3`, 'dest': 'https://openapi.tugboatlogic.com/api/v0/evidence/collector/26148/'},
    {'name': 'TBLMDMCompliance', 'source': `${jamfReportURL}/21`, 'dest': 'https://openapi.tugboatlogic.com/api/v0/evidence/collector/26214/'},
    {'name': 'TBLPatchSoftwareTitles', 'source': `https://curebase.jamfcloud.com/JSSResource/patchsoftwaretitles`, 'dest': 'https://openapi.tugboatlogic.com/api/v0/evidence/collector/26215/'}
];

export { credentials, bearerHeaders, reportsArray }