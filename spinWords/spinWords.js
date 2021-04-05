const spinWords = (string) => {
    const newString = string.split(" ");
    newString.forEach((element) => {
      if (element.length >= 5) {
        const reversedWords = element.split("").reverse().join("");
        newString[newString.indexOf(element)] = reversedWords;
      }
    });
    return newString.join(' ');
  };
  
  module.exports = spinWords;