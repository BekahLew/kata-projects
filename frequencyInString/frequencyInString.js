/*
Problem Description: Create a method that takes a string and returns an object made up of three objects.
One object is a frequency breakdown of letters, one is frequency breakdown of numbers and one is frequency breakdown of punctuations.
Let's ignore spaces for this one.

Focus:
Implementation - Figure out how to implement this functionality. We also want to focus on how to make the code clean and clear.
Naming - Make the names clear. Focus on naming things in the code to make their intentions clear.
Objects - We are focusing on how to create objects and the syntax around creating them.

An example Input: "Number One 101!!!" => Output: {letters: {N: 1, u: 1, m: 1, b: 1, e: 2, r: 1, O: 1, n: 1}, numbers: {"1": 2, "0": 1}, punctuations: {"!": 3}}

Notes:
You can use es6 or you can use es5.
Try to write your code and tests in a way that would be approved in a PR.
*/

export default (inputString) => {
    if (typeof inputString !== "string") {
        throw new Error("Input must be a string.");
    }
    if (typeof inputString === "") {
        throw new Error("String cannot be empty.");
    }

    const frequencyOfLettersNumbersPunctuation = {
            letters: {},
            numbers: {},
            punctuations: {},
        },
        arrayOfLetters = inputString.split("");

    arrayOfLetters.forEach((character) => {
        if (character === " ") {
            return;
        }

        if (character >= "0" && character <= "9") {
            if (frequencyOfLettersNumbersPunctuation.numbers[character]) {
                frequencyOfLettersNumbersPunctuation.numbers[character]++;
            } 
            if (!frequencyOfLettersNumbersPunctuation.numbers[character]) {
                frequencyOfLettersNumbersPunctuation.numbers[character] = 1;
            }
        } else if (
            character === "!" ||
            character === "?" ||
            character === "." ||
            character === ","
        ) {
            if (frequencyOfLettersNumbersPunctuation.punctuations[character]) {
                frequencyOfLettersNumbersPunctuation.punctuations[character]++;
            } 
            if (!frequencyOfLettersNumbersPunctuation.punctuations[character]) {
                frequencyOfLettersNumbersPunctuation.punctuations[character] = 1;
            }
        } else {
            if (frequencyOfLettersNumbersPunctuation.letters[character]) {
                frequencyOfLettersNumbersPunctuation.letters[character]++;
            } 
            if (!frequencyOfLettersNumbersPunctuation.letters[character]) {
                frequencyOfLettersNumbersPunctuation.letters[character] = 1;
            }
        }
    });
    return frequencyOfLettersNumbersPunctuation;
};
