export function delay(del, callback, context, ...args){
    
     setTimeout(() => {
        // console.log(del)
         return callback.apply(context, args)
    }, del);
}
// const obj = {
//     z: 10,
//     func(a, b, c) {
//         console.log( a + b + c + this.z)
//     },
// }

// // console.log(obj.func(1,2,3))

// console.log(delay(500,  obj.func, obj, 1, 2, 3))