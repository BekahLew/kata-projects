const getDivisorsCnt = require("./getDivisorsCnt");


describe('GetDivisorCnt method', () => {
	it("Should throw an error if the input is not an integer", () => {
        expect.assertions(1);
        try {
            getDivisorsCnt("hi");
        } catch (e) {
            expect(e.message).toEqual("Input must be an integer");
        }
    });
	it("Should return the total number of divisors or the given number", () => {
        expect(getDivisorsCnt(10)).toEqual(4);
        expect(getDivisorsCnt(10298)).toEqual(8);
        expect(getDivisorsCnt(1)).toEqual(1);
    });
});
