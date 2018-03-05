var swap = function (num1, num2) {
    let tempNum = num2;
    num2 = num1;
    num1 = tempNum;
    return [num1, num2];
}

var comparisons = function (num1, num2) {
    return num1 > num2;
}

function bubbleSort (arr) {
  let lastIndex = arr.length - 1;
  while (lastIndex > 0) {
    for (let i = 0; i < lastIndex; i++) {
      let currentNum = arr[i];
      let nextNum = arr[i + 1];
      if (comparisons(currentNum, nextNum)) {
        const swappedNums = swap(currentNum, nextNum);
        arr[i] = swappedNums[0]
        arr[i + 1] = swappedNums[1]
      };
    }
    lastIndex--;
  }
  return arr;
}

