export const saveCalls = (func) => {
    withMemory.calls = [];
    
    function withMemory(...arg) {
        const newCall = [...arg];
        withMemory.calls.push(newCall);
        return func.apply(this, arg)
    }

    return withMemory
}