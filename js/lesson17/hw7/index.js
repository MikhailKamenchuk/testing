export const bind = (func, context, ...arg) => {
    return function(){
        return func.call(context, arg)
    }
}