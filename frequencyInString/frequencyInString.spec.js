const frequencyInString = require("./frequencyInString");

describe("When given a string it returns an object with the frequency of letters, numbers and punctuation", () => {
    it("Should throw an error if the input is not a string", () => {
        expect.assertions(1);
        try {
            frequencyInString(2);
        } catch (e) {
            expect(e.message).toEqual("Input must be a string.");
        }
    });
    it("Should throw an error if the input is an empty string", () => {
        expect.assertions(0);
        try {
            frequencyInString("");
        } catch (e) {
            expect(e.message).toEqual("String cannot be empty.");
        }
    });
    it("Should return an object with the frequency of letters, numbers and punctuation in three seperate objects.", () => {
        expect(frequencyInString("Number One 101!!!")).toEqual({
            letters: { N: 1, u: 1, m: 1, b: 1, e: 2, r: 1, O: 1, n: 1 },
            numbers: { 1: 2, 0: 1 },
            punctuations: { "!": 3 },
        });
    });
    it("Should return an empty object if a certain type of character is not present", () => {
        expect(frequencyInString("Number One!!!")).toEqual({
            letters: { N: 1, u: 1, m: 1, b: 1, e: 2, r: 1, O: 1, n: 1 },
            numbers: {},
            punctuations: { "!": 3 },
        });
    });
});
