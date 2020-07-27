import getMinSquaredNumber from "./getMinSquaredNumber";


it('shold get null if argumen array is empty', () => {
    const res = getMinSquaredNumber([]);
    expect(res).toEqual(null);
});
it('shold get null if argument is string', () => {
    const res = getMinSquaredNumber('Str');
    expect(res).toEqual(null);
});
it('shold get the square of the least modulo number ', () => {
    const res = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(res).toEqual(4);
});
