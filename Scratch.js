var fs = require('fs');

fs.readFile('bearer_token.txt', "utf8", (err, data) => {
    console.log(data);
})