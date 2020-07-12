const transformToObject = arr => {
    const obj = {};
    arr.forEach(item => obj[item] = item)
    return obj
}