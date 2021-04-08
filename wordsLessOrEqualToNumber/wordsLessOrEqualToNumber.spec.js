const wordsLessOrEqualToNumber = require("./wordsLessOrEqualToNumber");

describe("Returns a sentence with words that are less than or equal to a given number", () => {
  it('Should return "is a" when given the sentence "This is a sentence" and number 2', () => {
    expect(wordsLessOrEqualToNumber("This is a sentence", 2)).toEqual("is a");
  });
  it("Should treat numbers within the string as a string and not an integer", () => {
    expect(
      wordsLessOrEqualToNumber("This is a sentence with the number 6", 3)
    ).toEqual("is a the 6");
  });
  it("Should return an empty string if no word length is less than or equal to number length", () => {
    expect(wordsLessOrEqualToNumber("Really large words", 2)).toEqual("");
  });
  it("Should return null if sentence is not a string", () => {
    expect(wordsLessOrEqualToNumber(5, 2)).toEqual(null);
  });
  it("Should return null if the numberOfLetters is not an integer", () => {
    expect(wordsLessOrEqualToNumber("This is a sentence", "number")).toEqual(
      null
    );
  });
});