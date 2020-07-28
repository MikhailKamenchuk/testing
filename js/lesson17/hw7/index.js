export function bind(func, context, ...rest){
    return function(){
        return func.apply(context, rest)
    }
}