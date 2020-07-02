const checkSum = (arr) => {
    if(Array.isArray(arr)) return null;
    const sum = arr.reduce((prev, next) => prev + next, 0);
    return sum > 100
}