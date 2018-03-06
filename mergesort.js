function split (arr) {
  const midPoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);

  if (arr.length === 1) {
    return arr;
  }

  const result = merge(split(firstHalf), split(secondHalf));

  return result;
}

function comparisons (num1, num2) {
  return num1 < num2
}

function merge (firstHalf, secondHalf) {

  let returnArr = [];

  while (firstHalf.length > 0 || secondHalf.length > 0) {
    let smaller;
    // if there are items on both sides
    if (firstHalf[0] && secondHalf[0]) {
      if (comparisons(firstHalf[0], secondHalf[0])) {
        returnArr.push(firstHalf.shift(1));
      } else {
        returnArr.push(secondHalf.shift(1));
      }
    }

    // if one of the sides is empty
    if (!firstHalf[0]) {
      returnArr = returnArr.concat(secondHalf);
      secondHalf = [];
    } else if (!secondHalf[0]) {
      returnArr = returnArr.concat(firstHalf)
      firstHalf = [];
    }
  }
  return returnArr;
}

// let arr = [6, 5, 3, 1, 8, 7, 2, 4];
// console.log(split(arr));
