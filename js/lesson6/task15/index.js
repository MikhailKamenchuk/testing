const getSubArray = (arr, num) => {
    let newArray = arr.map(item => item);
    newArray.length = num;
    return newArray;
}