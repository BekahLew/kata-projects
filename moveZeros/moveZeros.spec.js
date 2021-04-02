const moveZeros = require("./moveZeros");

describe("Moves all zeros to end of array", () => {
    it("Should repeat the word Hi 5 times when Hi and 5 are the input.", () => {
        expect(moveZeros([1, 5, 2, 0, 5, 0, 3])).toEqual([1, 5, 2, 5, 3, 0, 0]);
    });
    it("Should repeat the word Hi 5 times when Hi and 5 are the input.", () => {
        expect(moveZeros([1, 5, null, 0, 5, 0, "f"])).toEqual([1, 5, null, 5, "f", 0, 0]);
    });
});
