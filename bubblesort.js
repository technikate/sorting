function bubbleSort(array) {
  /* your code here */

  for (let end = array.length; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      let currentElement = array[i];

      if (array[i] > array[i + 1]) {
        array[i] = array[i + 1];

        array[i + 1] = currentElement;
      }
    }
  }

  console.log(array);
  return array;
}

bubbleSort([3, 2, 5, 6, 7, 4, 1]);
