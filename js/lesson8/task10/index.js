const buildObject = (keysList, valuesList) => {
    let obj = {};
    keysList.forEach((key, index) => obj[key] = valuesList[index])
    return obj
})