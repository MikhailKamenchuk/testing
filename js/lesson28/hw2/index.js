// input: number
// output number

// algo:
// 1.create fibonacci cicle
// 2.stop cicle when value will be bigest than inpute value

export const maxFibonacci = n => {
    let prev = 0;
    let next = 1;
    for (let i = 0; ; i++) {
        if (next > n) break
        const temporary = next;
        next = prev + next;
        prev = temporary;
    }
    return prev;
}
