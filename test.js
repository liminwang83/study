const Promise = require('bluebird');
// const fs = Promise.promisifyAll(require('fs'));
const fs = require('fs');
// const util = require('./promisifyUtil');
// const fs = util.promisifyAll(require('fs'));
// const read = util.promisify(fs.readFile);

// read('./myFile.txt', 'utf-8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

fs.readFile('./myFile1.txt', 'utf-8', (err, data) => {
    "use strict";
    if(err) {
        console.log('unexpected');
        console.log(err);
    }
    console.log(data);
});

// fs.readFileAsync('./myFile.txt', 'utf-8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

console.log('test me');
