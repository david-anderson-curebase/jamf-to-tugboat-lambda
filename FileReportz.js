import fs from 'fs';

var testJSON = {'name': 'dumptruck', 'species': 'cat', 'age': 1}

let testArray = ['dumptruck', 'thadd', 'bronson']
var body = fs.readFile('computerreports.json', 'utf-8', function(err,data) {
  console.log(data);
})

var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "0d0851b4-28af-11ed-8986-0a58a9feac02-org-id-12779");
myHeaders.append("Authorization", "Basic QVBJUm91dGVyOlNEWUpmOG5wN203Z0E3SmMzemZ1TEhRQnhZTVA5QVl2");
myHeaders.append("Content-type", "application/json");

var formdata = new FormData();
formdata.append("collected", "2022-09-07");
formdata.append("body", testJSON);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://openapi.tugboatlogic.com/api/v0/evidence/collector/26148/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

console.log(typeof testJSON)