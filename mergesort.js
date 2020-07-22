function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */

  let firstHalf = [];
  let secondHalf = [];

  const length = wholeArray.length;
  //const halfLength = length / 2;

  if (length % 2 === 0) {
    firstHalf = wholeArray.slice(0, length / 2);
    secondHalf = wholeArray.slice(length / 2);
  } else {
    firstHalf = wholeArray.slice(0, length / 2);
    secondHalf = wholeArray.slice(length / 2);
  }

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  //sorting the array
  let firstIndx = 0;
  let secondIndx = 0;

  let result = [];

  while (firstIndx < firstHalf.length && secondIndx < secondHalf.length) {
    if (firstHalf[firstIndx] < secondHalf[secondIndx]) {
      result.push(firstHalf[firstIndx]);
      firstIndx++;
    } else {
      result.push(secondHalf[secondIndx]);
      secondIndx++;
    }
  }

  return result;
}
