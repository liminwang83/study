module.exports = {
    fact,
    fib,
    binarySearch,
    isPalinString,
    permutations,
    createBST
};

function fact(n) {
    if(typeof n !== 'number' || n < 0)
        throw new Error('Ileaguage arguments!');
    //exit
    if(n === 0 || n === 1) return 1;

    return n * fact(n-1);
}

function fib(n) {
    if(typeof n !== 'number' || n < 1)
        throw new Error('Ileaguage arguments!');

    if(n ===1 || n ===2) return 1;

    return fib(n-1)+fib(n-2);
}

function binarySearch(arr, val) {
    if(arr.length === 0) return false;
    if(arr.length === 1) return arr[0] === val;

    const mid = Math.floor(arr.length / 2);
    if(arr[mid] === val) return true;
    if(arr[mid] > val) return binarySearch(arr.slice(0, mid), val);
    if(arr[mid] < val) return binarySearch(arr.slice(mid), val);
}

function isPalinString(str) {
    if(str.length === 0 || str.length === 1) return true;

    return str[0] === str[str.length-1] && isPalinString(str.substring(1, str.length-1));
}

function permutations(str) {
    if(str.length === 1) {
        return [str];
    }

    const result = [];
    const subP = permutations(str.slice(1));
    for(let i =0;i< subP.length; i++) {
        for(let j=0;j<= subP[i].length;j++) {
            const itemArray = subP[i].split('');
            itemArray.splice(j, 0, str[0]);
            result.push(itemArray.join(''));
        }
    }
    return result;
}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function createBST(valueArray) {
    this.root = null;
    this.insertNode = function (value) {
        const stack = [];
        if(!this.root) this.root = new Node(value);

        let temp = this.root;

        if(value < temp.value) {
            stack.push(temp);
            temp = temp.left;
        }

    }
}
