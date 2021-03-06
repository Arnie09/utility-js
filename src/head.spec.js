const head = require('./head');

describe('Head', () => {

    it('The head of [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('The head of [] is undefined', () => {
        expect(head([])).toEqual(undefined);
    });
})