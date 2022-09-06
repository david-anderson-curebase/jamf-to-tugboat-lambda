import dotenv from 'dotenv';
dotenv.config();
import { getToken } from "./bearerRequest.js";

const credentials = btoa(`${process.env.ACCOUNT}:${process.env.CREDENTIAL}`);
const url = process.env.TOKEN_URL;
const headers = {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Authorization': `Basic ${credentials}`
    },
    redirect: 'follow'
};

console.log(getToken(url, headers));
