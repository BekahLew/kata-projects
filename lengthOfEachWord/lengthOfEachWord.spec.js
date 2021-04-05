const lengthOfEachWord = require("./lengthOfEachWord");

describe("Takes a string and returns an object with each word and their length", () => {
    it("Should throw an error if the input is not a string", () => {
        expect.assertions(1);
        try {
            lengthOfEachWord(2);
        } catch (e) {
            expect(e.message).toEqual("Input must be a string");
        }
    });
    it("Should throw an error if the input is an empty string", () => {
        expect.assertions(1);
        try {
            lengthOfEachWord("");
        } catch (e) {
            expect(e.message).toEqual("Please input a string");
        }
    });
    it('Should return {This: 4, is: 2, the: 3, string: 6} when given the string "This is the string"', () => {
        expect(lengthOfEachWord("This is the string")).toEqual({
            This: 4,
            is: 2,
            the: 3,
            string: 6,
        });
    });
    it("Should return two instances of the word this when one is capitalized.", () => {
        expect(
            lengthOfEachWord("This is a string with two this words")
        ).toEqual({
            This: 4,
            is: 2,
            a: 1,
            string: 6,
            with: 4,
            two: 3,
            this: 4,
            words: 5,
        });
    });
    it("Should give the length of a word once regardless of how many times it occurs in a string", () => {
        expect(lengthOfEachWord("cat cat cat cat")).toEqual({
            cat: 3,
        });
    });
});
