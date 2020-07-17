const reverseString = str => {
    if(typeof str !== 'string') return null;
    str.split('').reverse().join('')
}