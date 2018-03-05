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
  return num1 > num2;
}

function merge (firstHalf, secondHalf) {
  /*
  [5, 4, 3, 2, 1]
  --> [[5, 4] | [3, 2, 1]]
  --> [[[5], [4]] | [[3, 2], [1]]]
  --> [[[[5], [4]] | [[[3], [2]], [1]]]
  --> [[4, 5] | [[2, 3], [1]]
  --> [[4, 5] | [1, 2, 3]]
  --> [1, 2, 3, 4, 5]
  */
  // [[[[5], [4]] | [[[3], [2]], [1]]]
  // LEFT SIDE:
  // -- 5 -- 4 --> 4 pushed
  // -- 5 pushed
  // RIGHT SIDE:
  // -- LEFT SIDE
  // ---- 3 -- 2 --> 2 pushed
  // ---- 3 pushed
  // -- RIGHT SIDE
  // ---- 1 pushed
  //
  //
  //  [[4, 5] | [[2, 3], [1]]
  // -- RIGHT SIDE
  // 2 -- 1 --> 1 pushed
  // 2, 3 pushed

  // [[4, 5] | [1, 2, 3]]
  // 4(ref) -- 1 --> 1 pushed to returnArr
  // 4 -- 2 --> 2 pushed
  // 4 -- 3 --> 3 pushed
  // 4, 5 pushed

  let returnArr = [];
  let reference = firstHalf[0];
  let comparator = secondHalf[0];

  if (!secondHalf) returnArr.push(reference);
  else {
    for (let i = 0; i < secondHalf.length; i++) {
      if (comparison(reference, comparator)) {
        returnArr.push(comparator);
        reference = secondHalf[i + 1];
      } else {
        returnArr.push(reference);
        reference = firstHalf[i + 1];
      }
    }
  }

  returnArr.concat(firstHalf[firstHalf.indexOf(reference)]);

  return returnArr;
}

let arr = [1, 2, 3];
console.log(split(arr));
