const wordRepeater = require("./wordRepeater");

describe("Repeats a string a given amount of times.", () => {
    it("Should repeat the word Hi 5 times when Hi and 5 are the input.", () => {
        expect(wordRepeater("Hi", 5)).toEqual("HiHiHiHiHi");
    });
    it("Should return a concatenated string even if an integer is passed.", () => {
        expect(wordRepeater(5, 10)).toEqual("5555555555");
    });
});
