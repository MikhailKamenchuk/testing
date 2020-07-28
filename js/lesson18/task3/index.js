export const sumOfSquares = (...arg) => {
    return [...arg].reduce((acc, next) => acc + next * next, 0)
}
