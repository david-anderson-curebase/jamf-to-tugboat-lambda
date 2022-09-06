var fs = require('fs');

fs.readFile('bearer_token', "utf8", (err, data) => {
    console.log(data);
})