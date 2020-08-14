import { sum, mult } from '../calculator';

it('should return sum of two numbers', () => {
    const res = sum(2,3);
    expect(res).toEqual(5)
});
it('should return multiplate of two numbers', () => {
    const res = mult(2,3);
    expect(res).toEqual(6)
})