let count = 0;
export const add = num => count += num;
export const decrease = num => count -= num;
export const reset = () => count = 0;
export const getMemo = () => count;
