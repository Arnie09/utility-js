const Min = require('./Min');

describe('Min', () => {

    it('Min of [] is undefined', () => {
        expect(Min([])).toEqual(undefined);
    });
    
    it('Min of [1, 2, 3] is 1', () => {
        expect(Min([1, 2, 3])).toEqual(1);
    });

    it('Min of [-1,-3,-2] is -3', () => {
        expect(Min([-1, -3, -2])).toEqual(-3);
    });

})