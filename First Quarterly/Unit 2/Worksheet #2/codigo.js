// 1
console.log(Math.round(Math.random()));
console.log(Math.floor(Math.random() * (200 - 100)) + 100);

var getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(getRandom(1000, 2000));

// 5