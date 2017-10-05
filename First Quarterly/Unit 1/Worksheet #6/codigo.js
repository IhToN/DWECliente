// 1
var addArray = (...args) => {
    let ret = 0;
    for (let i = 0; i < args.length; i++) {
        ret += args[i];
    }
    return ret;
};

// 2
var addOnlyNums = (...args) => {
    let ret = 0;
    for (let i = 0; i < args.length; i++) {
        if (!isNaN(args[i]))
            ret += args[i];
    }
    return ret;
};

// 3
var countTheArgs = (...args) => {
    return args.length;
};

// 4
var combineTwoArrays = (array1, array2) => {
    return [...array1, ...array2];
};

// 5 - un pin al que sepa qué tiene que hacer
var sumEveryOther = (...args) => {
    let ret = 0;
    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) ret += args[i];
    }
    return ret;
};

// 6
var onlyUniques = (...args) => {
    let ret = [];
    for (let i = 0; i < args.length; i++) if (!ret.includes(args[i])) ret.push(args[i]);
    return ret;
};

// 7
var combineAllArrays = (...arrays) => {
    let ret = [];
    for (let i = 0; i < arrays.length; i++) ret.push(...arrays[i]);
    return ret;
};

// 8
var squareAndSum = (...args) => {
    let ret = 0;
    for (let i = 0; i < args.length; i++) {
        if (!isNaN(args[i])) ret += args[i] ** 2;
    }
    return ret;
};