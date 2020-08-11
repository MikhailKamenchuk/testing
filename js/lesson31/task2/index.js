export const asyncCalculator = num => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Initial value: ${num}`)
            return resolve(num)
        }, 500);
    })
    .then(value => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`Squared value: ${value*value}`);
                return resolve(value*value  )
            }, 500);
        })
    })
    .then(value => new Promise(resolve => {
        console.log(`Doubled value: ${value * 2}`);
        return resolve(value * 2)
    })
    )
}
