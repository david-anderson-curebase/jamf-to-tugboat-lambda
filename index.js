import { getToken } from "./BearerRequest.js";
import { getReport } from "./GetReport.js";
import { getReports } from "./GetReports.js";
import { credentials, bearerHeaders } from "./variables.js";

getToken(bearerHeaders, getReports);