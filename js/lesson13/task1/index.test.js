import  { getEvenNumbers }  from './index';

it('17 equal 17', () => {
    expect(17).toEqual(17)
});

it('18 not to equal 17', () => {
    expect(18).not.toEqual(17)
})

it('should get only even numbers from array', () => {
    const result = getEvenNumbers([1,2,3,4,5,6]);
    expect(result).toEqual([2,4,6])
})