const sum = (from, to) => {
    let result = 0;
    for(let i = from; i <= to; i++){
        result += i;
    }
    return result;
}

const compareSums = (a, b, c, d) => sum(a, b) > sum(c, d)