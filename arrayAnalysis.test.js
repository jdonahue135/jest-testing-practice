import { analyze } from './arrayAnalysis'

test('returns an object with the arrays average, min, max and length', () => {
    expect(analyze([4, 2, 3, 3])).toEqual({"average": 3, "min": 2, "max": 4, "length": 4});
})