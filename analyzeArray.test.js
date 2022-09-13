import { analyzeArray } from "./analyzeArray";

it('Normal Size Array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

it('One Element Array', () => {
    expect(analyzeArray([8])).toStrictEqual({
        average: 8,
        min: 8,
        max: 8,
        length: 1,
    });
});