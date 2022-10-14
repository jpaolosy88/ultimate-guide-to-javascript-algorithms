/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// function falsyBouncer(array) {
//   let result = [];
//   for (item of array) {
//     if (item) {
//       result.push(item);
//     }
//   }
//   console.log(array);
//   console.log(result);
//   return result;
// }

// function falsyBouncer(array) {
//   return array.filter((value) => value);
// }

module.exports = falsyBouncer;
