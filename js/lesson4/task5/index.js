const m = 4;
const n = 14;
let result = 0;
for(let i = m; i <= n; i++){
    if(i % 2 ===0 && !(i % 4 === 0) && !(i % 5 === 0)){
        result += i;
        continue;
    } else if (i % 3 === 0 && !(i % 5 === 0)){
        result -= i;
        continue;
    } else if(i % 4 === 0 && !(i % 5 === 0)){
        result *= i;
        continue;
    } else if( i % 5 === 0){
        console.log(i);
    } else {
        continue
    }
}