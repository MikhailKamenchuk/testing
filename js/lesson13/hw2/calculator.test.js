import { calc } from "./calculator";

it('should get sum of numbers', () => {
    const res = calc('2 + 4');
    expect(res).toEqual('2 + 4 = 6')
});
it('should get the result of subtraction of numbers', () => {
    const res = calc('4 - 2');
    expect(res).toEqual('4 - 2 = 2')
});
it('should get the result of multiplication of numbers', () => {
    const res = calc('2 * 4');
    expect(res).toEqual('2 * 4 = 8')
});
it('should get the result of devision of numbers', () => {
    const res = calc('4 / 2');
    expect(res).toEqual('4 / 2 = 2')
});
it('should get null if argumet is not a string', () => {
    const res = calc(12312);
    expect(res).toEqual(null)
});
