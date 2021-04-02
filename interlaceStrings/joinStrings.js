const joinStrings = (string1, string2, string3) => {
    if (
        typeof string1 != "string" ||
        typeof string2 != "string" ||
        typeof string3 != "string"
    ) {
        return null;
    }
    let mergedString = "";
    for (
        let i = 0;
        i < string1.length && i < string2.length && i < string3.length;
        i++
    ) {
        mergedString += string1[i] + string2[i] + string3[i];
    }
    return mergedString;
};

module.exports = joinStrings;