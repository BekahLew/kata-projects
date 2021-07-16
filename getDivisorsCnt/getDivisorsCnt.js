const getDivisorsCnt = (number) => {
    if(typeof number !== 'number') {
        throw new Error('Input must be an integer');
    }
    arrayOfDivisors = [];
    for (let i = 0; i <= number; i++) {
        if ((number / i) % 1 === 0) {
            arrayOfDivisors.push(i);
        }
    }
    return arrayOfDivisors.length;
};

module.exports = getDivisorsCnt;