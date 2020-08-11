export const delay = ms => new Promise(resolve => {
    setTimeout(() => {
        return resolve()
    }, ms);
});
