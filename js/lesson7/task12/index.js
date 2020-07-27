export const arrAverage = arr => {
    if(!Array.isArray(arr)) return null;
    return arr.reduce((acc, next) => acc + next, 0) / arr.length
}