/*
Problem Description: Create a method that takes a string and returns an object 
with each word that appears in the sentence as the key and the length of the word as the value.

Focus:
Implementation - Figure out how to implement this functionality. We also want to focus on how to make the code clean and clear.
Naming - Make the names clear. Focus on naming things in the code to make their intentions clear.

An example Input: "This is the string" => Output: {This: 4, is: 2, the: 3, string: 6}
An example Input: "ABC 122333" => Output: {ABC: 3, "122333": 6}

Notes:
You can use es6 or you can use es5.
Try to write your code and tests in a way that would be approved in a PR.
*/

const lengthOfEachWord = inputtedString => {
    if (typeof inputtedString !== "string") {
        throw new Error("Input must be a string");
    }
    if (inputtedString === "") {
        throw new Error("Please input a string");
    }
    const lengthOfEachWord = {},
    arrayOfWords = inputtedString.split(" ");

    arrayOfWords.forEach(word => {
        lengthOfEachWord[word] = word.length;
    });
    return lengthOfEachWord;
};

module.exports = lengthOfEachWord;