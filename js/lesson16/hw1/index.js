export const createArrayOfFunctions = num => {
    let arr = [];
    if(typeof num !== 'number') return null;
    if(!num) return [];
    for(let i = 0; i < num; i++){
        arr[i] = function(){
            return i
        }
    }
    return arr
}
