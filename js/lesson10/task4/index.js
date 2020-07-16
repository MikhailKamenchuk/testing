const getMaxAbsoluteNumber = arr => {
    if(!Array.isArray(arr)) return null;
    const absoluteNumbersArray = arr.map(item => Math.abs(item));
    return Math.max(...absoluteNumbersArray)
}