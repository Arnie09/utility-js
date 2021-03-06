const add = require('./head');

describe('Head', () => {

    it('The head of [1,2,3] is 1', () => {
        expect(add([1,2,3])).toEqual(1);
    });

    it('The head of [] is undefined', () => {
        expect(add([])).toEqual(undefined);
    });
})