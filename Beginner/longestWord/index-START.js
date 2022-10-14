// function longestWord(text) {
//   let maxLength = 0;
//   let textArray = text.split(" ");
//   let result = "";
//   for (let i = 0; i < textArray.length; i++) {
//     if (textArray[i].length > maxLength) {
//       maxLength = textArray[i].length;
//       result = textArray[i];
//     }
//   }
//   return result;
// }

function longestWord(text) {
  let textArray = text.split(" ");
  let result = textArray.reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) {
      return currentWord;
    } else {
      return maxLengthWord;
    }
  }, "");
  return result;
}

// function longestWord(text) {
//   return text.split(" ").sort((a, b) => b.length - a.length)[0];
// }

module.exports = longestWord;
