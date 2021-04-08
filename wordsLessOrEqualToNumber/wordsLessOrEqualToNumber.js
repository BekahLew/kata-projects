const wordsLessOrEqualToNumber = (sentence, numberOfLetters) => {
  if (typeof sentence !== "string") {
    return null;
  }
  if (typeof numberOfLetters !== "number") {
    return null;
  }
  // Decrementing array solution
  const arrayOfWords = sentence.split(" ");
  for (let i = arrayOfWords.length - 1; i >= 0; i--) {
    if (arrayOfWords[i].length > numberOfLetters) {
      arrayOfWords.splice(i, 1);
    }
  }
  return arrayOfWords.join(" ");

  //Filter Solution
  // return arrayOfWords.filter(word => word.length <= numberOfLetters).join(" ");
};

module.exports = wordsLessOrEqualToNumber;