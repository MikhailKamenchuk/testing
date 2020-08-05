const mult = num1 => num2 => num1 * num2;
const twice = num => mult(num)(2);
const triple = num => mult(num)(3);

export {
    mult,
    twice,
    triple
}