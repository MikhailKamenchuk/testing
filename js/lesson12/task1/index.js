const calc = expression => {
    const expressionToArr = expression.split(' ');
    const [a, operator, b] = expressionToArr;
    let result = '';
    switch (operator) {
        case '+':
            result += +a + +b;
            break;
        case '-':
            result += a - b;
            break;
    
        case '*':
            result += a * b;
            break;

        case '/':
            result += a / b;
            break;
                             
        default:
            break;
    }
    return `${expression} = ${result}`
}