const generateUniqueid = require('../../src/utils/generateUniqueid');

describe('Generate Unique ID', () => {
    it('should generatean unique ID', ()=> {
        const id = generateUniqueid();

        expect(id).toHaveLength(8);
    });
});