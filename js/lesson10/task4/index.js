const getMaxAbsoluteNumber = arr => {
    if(!Array.isArray(arr) || arr.length === 0) return null;
    const absoluteNumbersArray = arr.map(item => Math.abs(item));
    return Math.max(...absoluteNumbersArray)
}