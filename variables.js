import dotenv from 'dotenv';
dotenv.config()


const credentials = btoa(`${process.env.ACCOUNT}:${process.env.CREDENTIAL}`);
const bearerHeaders = {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Authorization': `Basic ${credentials}`
    },
    redirect: 'follow'
};
const bearerURL = 'https://curebase.jamfcloud.com/api/v1/auth/token';


export { credentials, bearerHeaders }