export const delay = (del, callback, context, ...args) => {
    setTimeout(() => {
        callback.bind(context, args)
    }, del);
}