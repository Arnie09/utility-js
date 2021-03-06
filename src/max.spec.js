const max = require('./max');

describe('Max', () => {

    it('Max of [] is undefined', () => {
        expect(max([])).toEqual(undefined);
    });
    
    it('Max of [1, 2, 3] is 3', () => {
        expect(max([1, 2, 3])).toEqual(3);
    });

    it('Max of [-1,-3,-2] is -1', () => {
        expect(max([-1, -3, -2])).toEqual(-1);
    });

})