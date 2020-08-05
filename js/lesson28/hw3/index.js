// input: number
// output number

// algo:
// 1.function for input <= 1 must returned  input
// 2.for rest => must returned last number + (last number - 1)

export const sum = n => {
    return n <= 1 ? n : n + sum(n - 1)
}
