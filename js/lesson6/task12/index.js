const checker = (arr) => {
    if(!Array.isArray(arr)) return null;
    let min = null;
    let max = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= min){
            min = arr[i];
        }; 
        if(arr[i] >= max){
            max = arr[i];
        }
    }
    return max + min > 1000;
}