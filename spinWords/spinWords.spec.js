const spinWords = require("./spinWords");

describe("Reverses any words in a string that are 5 letters or longer", () => {
    it("Should reverse the word another in the string 'This is another test'.", () => {
        expect(spinWords("This is another test")).toEqual("This is rehtona test");
    });
    it("Should work with two large words as well.", () => {
        expect(spinWords("This is another bigger words test")).toEqual("This is rehtona reggib sdrow test");
    });
});