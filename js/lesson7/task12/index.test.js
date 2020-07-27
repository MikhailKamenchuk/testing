import { arrAverage } from './index';

it('should get null if argument is not array', () => {
    const res = arrAverage("[2, 5, 6, 3]");
    expect(res).toEqual(null)
});
it('should get average of array of array', () => {
    const res = arrAverage([2, 5, 6, 3]);
    expect(res).toEqual(4)
});
it('should get number(not a string)', () => {
    const res = arrAverage([2, 5, 6, 3]);
    expect(res).not.toEqual('4')
})