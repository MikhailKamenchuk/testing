const getSum = (from, to) => {
    let sum = 0;
    for (let i = from; i <= to; i++){
        if(i % 2 === 0) sum += i;
    }
    return sum;
}