import { getToken } from "./BearerRequest.js";
import { getReport } from "./GetReport.js";
import { getReports } from "./GetReports.js";
import { credentials, bearerHeaders } from "./variables.js";

const helloWorld = (payload) => {
    console.log(`Here's your token, sir: ${payload}`)
}

getToken(bearerHeaders, getReports);