import dotenv from 'dotenv';
dotenv.config()

// for retrieving the bearer token
const credentials = btoa(`${process.env.BEARER_ACCOUNT}:${process.env.BEARER_CREDENTIAL}`);
const bearerHeaders = {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Authorization': `Basic ${credentials}`
    },
    redirect: 'follow'
};
const bearerUrl = 'https://curebase.jamfcloud.com/api/v1/auth/token'

export { bearerHeaders, bearerUrl }