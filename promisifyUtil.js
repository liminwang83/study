const Promise = require('bluebird');

module.exports = {
    promisify,
    promisifyAll
};

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            "use strict";
            fn(...args, (err, data) => {
                if(err) reject(err);
                resolve(data);
            });
        });
    };
}

function promisifyAll(obj) {
    return Object.keys(obj).filter(key => typeof obj[key] === 'function')
        .reduce((result, key) => {
            "use strict";
            result[key + 'Async'] = promisify(obj[key]);
            return result;
        }, {});
}