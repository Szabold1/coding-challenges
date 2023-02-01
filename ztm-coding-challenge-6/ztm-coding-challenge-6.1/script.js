// zero-to-mastery -- Coding_Challenge-6 (1.)

// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const testArray = [1, 1, 4, 92, "92", "2", 4, 10, "2", "1", "1", 1];

function sortNumbers(arr) {
  // 1. sorting numbers
  let sortedArr = arr.sort((a, b) => a - b);
  // [1, 1, '1', '1', 1, '2', '2', 4, 4, 10, 92, '92']

  // bonus
  let numsArr = [];
  let strsArr = [];

  sortedArr.forEach((item) =>
    typeof item === "number" ? numsArr.push(item) : strsArr.push(item)
  );
  // numsArr [1, 1, 1, 4, 4, 10, 92]
  // strsArr ['1', '1', '2', '2', '92']

  sortedArr = [putSameNumsIntoArrays(numsArr), putSameNumsIntoArrays(strsArr)];

  return sortedArr;
}

// 2. put same numbers into an array
function putSameNumsIntoArrays(arr) {
  let finalArr = [];
  let tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      tempArr.push(arr[i]);
    } else if (arr[i] === arr[i - 1] && arr[i] !== arr[i + 1]) {
      tempArr.push(arr[i]);
      finalArr.push(tempArr);
      tempArr = [];
    } else {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}

console.log(sortNumbers(testArray));
