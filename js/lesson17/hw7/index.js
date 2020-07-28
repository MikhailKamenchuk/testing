export const bind = (func, context, arg1, arg2) => {
    return function(){
        return func.call(context, arg1, arg2)
    }
}