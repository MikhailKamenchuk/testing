import { filterNames } from "./index";

it('should get array of only elemens, who contain substring and have length more than 5', () => {
    const res = filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');
    expect(res).toEqual(['Olivya', 'Nastya'])
});
it('should get array of only elemens, who contain substring and HAVE LENGTH MORE THAN 5', () => {
    const res = filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');
    expect(res).not.toEqual(['Olivya', 'Vanya', 'Nastya'])
});
it('should get array', () => {
    const res = filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');
    expect(res).not.toEqual('Olivya', 'Nastya')
});