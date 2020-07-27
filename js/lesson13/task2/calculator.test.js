import getSum, {getSquaredArray, getOddNumbers} from './calculator';

it('shold get squared numbers', () => {
    const res = getSquaredArray([1,2,3,4]);
    expect(res).toEqual([1,4,9,16])
});

it('shold get only odd numbers', () => {
    const res = getOddNumbers([1,2,3,4,5,6]);
    expect(res).toEqual([1,3,5])
});
it('shold get sum', () => {
    const res = getSum(7,9);
    expect(res).toEqual(16)
});