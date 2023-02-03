// zero-to-mastery -- Coding_Challenge-6 (2.)

// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

const testArr = [1, 4, 5, 12, 16, 18];
const testTarg = 23;

function giveTargNumFromArr(arr, targNum) {
  const arrLength = arr.length;
  let targArr = [];

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i !== j && targNum - arr[i] === arr[j]) {
        targArr.push(arr[i], arr[j]);
        return targArr;
      }
    }
  }
}

console.log(giveTargNumFromArr(testArr, testTarg));
