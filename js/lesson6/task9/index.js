const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)) return null;
    return arr.map(item => item % 2 ? item += delta : item)
}