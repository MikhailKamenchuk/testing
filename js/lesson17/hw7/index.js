export const bind = (func, context) => {
    return function(...args){
        return func.call(context, args)
    }
}