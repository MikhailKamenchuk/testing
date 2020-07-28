export const bind = (func, context) => {
    return function(...args){
        return func.apply(context, args)
    }
}