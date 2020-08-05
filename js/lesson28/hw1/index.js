// algo:
// 1. create resulted variable when will be writing intermediate value;
// 2. create object with required methods
// 3. create formatter ufnction
// 3. returned result object

// input: object
// output: object

const formatter = (date, value, amount) => {
    switch (value) {
        case 'years':
            console.log('Consolling DATE: ' + date)
            return date.setFullYear(date.getFullYear() + amount);
        case 'months':
            console.log('Consolling DATE: ' + date)
            return date.setMonth(date.getDate() + amount);
        case 'days':
            console.log('Consolling DATE: ' + date)
            return date.setDate(date.getDate() + amount);
        case 'hours':
            console.log('Consolling DATE: ' + date)
            return date.setHours(date.getHours() + amount);
        case 'minutes':
            console.log('Consolling DATE: ' + date)
            return date.setMinutes(date.getMinutes() + amount);
        case 'seconds':
            console.log('Consolling DATE: ' + date)
            return date.setSeconds(date.getSeconds() + amount);
        case 'milliseconds':
            console.log('Consolling DATE: ' + date)
            return date.setMilliseconds(date.getMilliseconds() + amount);
        default:
            break;
    }
}

export const shmoment = date => {
    let result = date;
    return {
        add(value, amount) {
            // console.log('Formatter: ' + formatter(result, value, amount))
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