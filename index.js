import fs from 'fs';
import { getToken } from "./BearerRequest.js";
import { credentials, bearerHeaders } from "./variables.js";

const helloWorld = (payload) => {
    console.log(`Here's your token, sir: ${payload}`)
}

getToken(bearerHeaders, helloWorld);