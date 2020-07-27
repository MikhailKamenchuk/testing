import {createCalculator} from "./index";

it('slould add numer to the counter', () => {
    const counter = createCalculator();
    counter.add(5);
    counter.add(3);
    counter.add(3);
    const res = counter.add(2);
    expect(res).toBe(13);
});
it('slould decrease numer from the counter', () => {
    const counter = createCalculator();
    counter.decrease(5);
    counter.decrease(3);
    counter.decrease(3);
    const res = counter.decrease(2);
    expect(res).toBe(-13);
});
it('slould reset the counter', () => {
    const counter = createCalculator();
    counter.add(3);
    counter.decrease(3);
    const res = counter.reset();
    expect(res).toBe(0);
});
it('slould get the current value of counter', () => {
    const counter = createCalculator();
    counter.add(3);
    counter.decrease(2);
    const res = counter.getMemo();
    expect(res).toBe(1);
});
it('slould get two different counters', () => {
    const counter1 = createCalculator();
    const counter2 = createCalculator();
    const res1 = counter1.add(3);
    const res2 = counter2.add(2);
    expect(res1).toBe(3);
    expect(res2).toBe(2);
});