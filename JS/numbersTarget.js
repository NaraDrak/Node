const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  target = 10;

function numbersTarget(nums, target) {
  result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      result = [nums[i] + nums[j]];
      if (result == target) {
        return [nums[i], nums[j]];
      }
    }
  }
  return result;
}
console.log(numbersTarget(nums, target));

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   target = 10;

// const data = (num, targ) => {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; i < nums.length; i++) {
//       if (i !== j) {
//         console.log("b site", i, j);
//         if (num[i] + num[j] === target) {
//           result.push(j);
//           result.push(i);
//         }
//       }
//     }
//   }
//   result.length = 2;
//   console.log(result);
// };

// data(nums, target);
