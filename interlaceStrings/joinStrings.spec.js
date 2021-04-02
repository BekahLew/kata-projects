const joinStrings = require("./joinStrings");

describe("Takes a list of strings and joins them into one string", () => {
    it('Should return catdogtie when given the strings "cat" "dog" "tie"', () => {
        expect(joinStrings("cat", "dog", "tie")).toEqual("cdtaoitge");
    });
    it("Should return null when an integer is passed", () => {
        expect(joinStrings("cat", 222, "tie")).toEqual(null);
    });
    it("Should return null when null is passed with other strings", () => {
        expect(joinStrings("cat", null, "tie")).toEqual(null);
    });
});
