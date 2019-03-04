const recursive = require('./recursive');

// [0,1,2,3,4].map(recursive.fact).forEach(result => console.log(result));

// [1,2,3,4,5].map(recursive.fib).forEach(result => console.log(result));

// const numbers = [2,5,8,9,15,21,45,67,98,100,125,300];
// const found = recursive.binarySearch(numbers, 67);
// console.log('found: ' + found);

// ['abcdedcba', 'sdfsdf', '', 'a', 'aabbaa'].map(recursive.isPalinString).forEach(r => console.log('isPalinString: ' + r));

// console.log(recursive.permutations('abc'));

console.log(recursive.createBST([8,4,8,1,3,0,56,31]));