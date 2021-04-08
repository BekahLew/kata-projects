const compareArrays = (array1, array2) => {
  if(!array1 || !array2 || (array1.length !== array2.length)) {
    return false;
  }
  const computedArray1 = array1.map(x => x ** 2).sort().join(','),
  sortedArray2 = array2.sort().join(',');
  return ((computedArray1 === sortedArray2) ? true : false);
};

module.exports = compareArrays;