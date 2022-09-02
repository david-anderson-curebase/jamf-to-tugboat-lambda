var fs = require('fs');

fs.writeFile('testfile.txt', 'This is a file created by Node.', function (err) {
    if (err) throw err;
    console.log("That Thing I Sentcha")
})