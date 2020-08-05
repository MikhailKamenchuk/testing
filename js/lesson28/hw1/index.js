// algo:
// 1. create resulted variable when will be writing intermediate value;
// 2. create object with required methods
// 3. create formatter ufnction
// 3. returned result object

// input: object
// output: object
const formatter = (d, value, amount) => {
    switch (value) {
        case 'years':
            return d.setFullYear(d.getFullYear() + amount);
        case 'months':
            return d.setMonth(d.getMonth() + amount);
        case 'days':
            return d.setDate(d.getDate() + amount);
        case 'hours':
            return d.setHours(d.getHours() + amount);
        case 'minutes':
            return d.setMinutes(d.getMinutes() + amount);
        case 'seconds':
            return d.setSeconds(d.getSeconds() + amount);
        case 'milliseconds':
            return d.setMilliseconds(d.getMilliseconds() + amount);
        default:
            break;
    }
}

export const shmoment = date => {
    let result = date;
    return {
        add(value, amount) {
            result = new Date (formatter(result, value, amount));
            return this
        },
        subtract(value, amount) {
            result = formatter(result, value, -amount);
            return this;
        },
        result() {
            return new Date(result)
        }
    }
};