const wordRepeater = (string, n) => {
    let combinedString = "";
    for (i = 0; i < n; i++) {
        combinedString += string;
    }
    return combinedString;
};
module.exports = wordRepeater;