module.exports = {
    findMoreThanHalfNumber,
    strToInt
};

function findMoreThanHalfNumber(arr = []) {
    if(!Array.isArray(arr)) return;

    const countMap = new Map();
    arr.forEach(num => {
        let count = countMap.get(num) || 0;
        count++;
        countMap.set(num, count);
    });

    const keyArray = Array.from(countMap.keys());
    return keyArray.find(key => {
        return countMap.get(key) * 2 > arr.length;
    });
}

declarative, imperative

function strToInt(str = '') {
    if(typeof  str != 'string')
        return Number.NaN;

    //use regular expression to extract the number portion of str
    let matchArr = /^\s*((\-|\+)?[0-9]+)\s*/.exec(str);
    if (!matchArr) {
        return Number.NaN; //not a number
    }

    return Number(str);
}