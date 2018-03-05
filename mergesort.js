function split (arr) {
  const midPoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);

  if (arr.length === 1) {
    return arr;
  }
  let finalFirstHalf = split(firstHalf);
  let finalSecondHalf = split(secondHalf);
  return [finalFirstHalf, finalSecondHalf];
}

function comparisons (num1, num2) {
  return num1 > num2;
}

function sort (arrayToSort) {
// [[[3], [2]], [1]]]
  return arrayToSort.reduce(function(sortedAcc, currentElem) {
    let inner1 = currentElem[0]
    let inner2 = currentElem[1]
    switch (true) {
      case (inner1.length > inner2.length):
        sortedAcc.push(sort(inner1));
        break;
      case (inner2.length > inner1.length):
        sortedAcc.push(sort(inner2));
        break;
      default:
        if (comparisons(inner1, inner2)) currentElem = [inner2, inner1];
        sortedAcc.push(currentElem);
        break;
    }
    return sortedAcc;
    // [[2, 3]]
  }, [])

}

function merge (arr) {
  /*
  [5, 4, 3, 2, 1]
  --> [[5, 4] | [3, 2, 1]]
  --> [[[5], [4]] | [[3, 2], [1]]]
  --> [[[[5], [4]] | [[[3], [2]], [1]]]
  --> [[4, 5] | [[2, 3], [1]]
  --> [[4, 5] | [1, 2, 3]]
  --> [1, 2, 3, 4, 5]
  */
  let splitArr = split(arr);



  return arr;
}

let arr = [1, 2, 3];
console.log(split(arr));
