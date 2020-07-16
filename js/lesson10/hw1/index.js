const getTotalPrice = arr => {
    let total = arr.reduce((a, b) => a + Math.floor(b), 0);
    return '$' + total.toFixed(2)
}