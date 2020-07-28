export function bind (context, func) {
    const args = [].slice.call(arguments).slice(1);
    return function() {
        return func.apply(context, [].slice.call(arguments).concat(args));
    }
}