const getTotalPrice = arr => {
    let total = arr.reduce((a, b) => a + b, 0);
    return '$' + Math.floor(total * 100) / 100
}