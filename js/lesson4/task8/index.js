let sum = 0
for (let i = 1; i <= 1000; i++) {
    sum += i;
}
let integer = Math.floor(sum / 1234);
let rest = sum % 1234;

console.log(integer > rest);