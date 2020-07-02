const getSum = (arr) => {
    let sum = 0;
    if(!Array.isArray(arr)){
        return null;
    }
    for(let num of arr){
        sum += num
    }
    return sum
}