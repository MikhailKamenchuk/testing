export const createCalculator = () => {
    let count = 0;
    const add = num => count += num;
    const decrease = num => count -= num;
    const reset = () => count = 0;
    const getMemo = () => count;
    return {
        add,
        decrease,
        reset,
        getMemo
    }

}