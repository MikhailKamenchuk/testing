const reverseArray = (arr) => {
    if(!Array.isArray(arr)) return null;
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.unshift(arr[i]);
    }
    return newArray;
}