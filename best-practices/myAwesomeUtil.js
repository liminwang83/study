module.exports = {
    findMoreThanHalfNumber,
    strToInt
};

function findMoreThanHalfNumber(arr = []) {
    if(!Array.isArray(arr)) return;

    const countMap = new Map();
    arr.forEach(num => {
        "use strict";
        let count = countMap.get(num) || 0;
        count++;
        countMap.set(num, count);
    });

    const keyArray = Array.from(countMap.keys());
    return keyArray.find(key => {
        "use strict";
        return countMap.get(key) * 2 > arr.length;
    });
}

function strToInt(str = '') {
    if(typeof  str != 'string')
        str = String(str);

    //use regular expression to extract the number portion of str
    let matchArr = /^\s*((\-|\+)?[0-9]+)\s*/.exec(str);
    if (!matchArr) {
        return Number.NaN; //not a number
    }

    return Number(str);

    // return toNumber(matchArr[1]);
    //
    // function toNumber (str) {
    //     let sign;
    //     let result;
    //     let strArr = str.split('');
    //     if (strArr[0] && strArr[0].match(/(\-|\+)/)) sign = strArr.shift();
    //     result = strArr.reduce((ret, val) => {
    //         ret = ret * 10 + Number(val);
    //         return ret;
    //     }, 0);
    //     return sign === '-' ? -result : result;
    // }
}