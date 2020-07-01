let sum = 0
for (let i = 1; i <= 1000; i++) {
    sum += i;
}
let rest = sum % 1234;
let integer = sum - rest;

integer > rest ? console.log('true') : console.log('false')