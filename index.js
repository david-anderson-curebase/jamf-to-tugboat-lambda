import { getToken } from "./GetToken.js";
import { getReports } from "./GetReports.js";
import { credentials, bearerHeaders, reportsArray } from "./variables.js";
import { fileReports } from './FileReports.js'

getToken();
setTimeout(() => {fileReports()}, 3000)