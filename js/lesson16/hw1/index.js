export const createArrayOfFunctions = num => {
    let arr = [];
    if(!num) return arr;
    if(typeof num !== 'number') return null;
    for(let i = 0; i < num; i++){
        arr[i] = function(){
            return i
        }
    }
    return arr
}
