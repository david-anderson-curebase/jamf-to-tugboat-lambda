import dotenv from 'dotenv';
dotenv.config()

const body = new FormData
body.append("collected", "2022-09-06")
body.append("file", "@./reports/TBLSoftwareInventoryPopulation.json;type=application/json")
body.append("", "\\")

fetch("https://openapi.tugboatlogic.com/api/v0/evidence/collector/26148/", {
    method: "POST",  
    body: body,
    headers: {
    Authorization: `Basic ${process.env.TUGBOAT_PASSWORD}`,
    "Content-Type": "multipart/form-data",
    "X-Api-Key": `${process.env.TUGBOAT_X_API_KEY}`
  }
})

console.log()


var date = new Date().toISOString();
console.log(date);