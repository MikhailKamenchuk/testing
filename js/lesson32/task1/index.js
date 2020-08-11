export const asyncSum = (...args) => {
    
    const getSum = arr => arr
        .filter(num => !isNaN(num))
        .reduce((acc, num) => acc + +num, 0);
    
    return Promise.all(args)
        .then(res => console.log(getSum(res)))
        .catch(() => new Error(`Can't calculate`))
}

// const someFunc = (num, delay) => new Promise(resolve => {
//     setTimeout(() => {
//         return resolve(num)
//     }, delay);

// });
// const getNumberV1 = someFunc(25, 3000);
// const getNumberV2 = someFunc(undefined, 2000);
// const getNumberV3 = someFunc('5', 400);

// const getSum = arr => arr.reduce((acc, num) => acc + num, 0)

// asyncSum(getNumberV1, getNumberV2, getNumberV3)
// // .then(res => console.log(getSum(res)))