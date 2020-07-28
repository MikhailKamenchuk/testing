export const bind = (func, context, ...arg) => {
    return function(){
        return func.apply(context, arg)
    }
}