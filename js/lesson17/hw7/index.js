export function bind(func, context){
    return function(...arg){
        return func.apply(context, arg)
    }
}