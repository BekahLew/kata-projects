const compareArrays = require("./compareArrays");

describe("Compares two arrays and returns true if array2 contains the numbers of array1 to the power of 2", () => {
    it("Should return true when array1 has 1, 2, 3 and array2 has 1, 4, 9", () => {
        expect(compareArrays([1, 2, 3], [1, 4, 9])).toEqual(true);
    });
    it("Should return false when the length of each array is not the same", () => {
        expect(compareArrays([1, 2, 3, 5], [1, 4, 9])).toEqual(false);
    });
    it("Should return false when only one array is given", () => {
        expect(compareArrays([1, 2, 3, 5])).toEqual(false);
    });
});
