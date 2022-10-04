import { getToken } from "./GetToken.js";
//import { getReports } from "./GetReports.js";
//import { fileReport } from './FileReport.js';
import { reportsArray } from './variables.js';
import { getReport } from './getReport.js';

//getToken(getReports, fileReport);

//pseudo-code for potential deployment
async function getAndFileReports() {
    let token = await getToken();
    let report = await getReport(token, 0);
    console.log(report)
    /*for (let i = 0; i < reportsArray.length; i++) {
        let report = getReport(token, i);
        //let filedReport = fileReport(report, i);
        console.log(`report ${reportsArray[i].name} filed`)
        console.log(report);
    };*/
};

getAndFileReports();