import { makeCounter } from './index';

it('should return count', () => {
    const counter = makeCounter();
    counter();
    counter();
    counter();
    const res = counter();
    expect(res).toEqual(3)
})

it('should get different counters', () => {
    const counter1 = makeCounter();
    const counter2 = makeCounter();
    counter1();
    counter1();
    counter1();
    counter2();
    counter2();
    const res1 = counter1();
    const res2 = counter2();

    expect(res1).toEqual(3);
    expect(res2).toBe(2)
})