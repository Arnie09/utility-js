const tail = require('./tail');
const add = require('./tail');

describe('tail', () => {

    it('The tail of [1,2,3] is 3', () => {
        expect(tail([1,2,3])).toEqual(3);
    });

    it('The tail of [] is undefined', () => {
        expect(tail([])).toEqual(undefined);
    });
})