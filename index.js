
function isPalindrome(word) {
  // Convert the string to lowercase and remove non-alphabetic characters
  word = word.toLowerCase().replace(/[^a-z]/g, "");

  // Reverse the string and compare it to the original string
  return word === word.split("").reverse().join("");
}
// //  SOLUTION 2 
// function isPalindrome(word) {
//   // Convert the string to lowercase
//   word = word.toLowerCase();

//   // Loop through the string and compare the first and last characters
//   for (let i = 0; i < Math.floor(word.length / 2); i++) {
//     if (word[i] !== word[word.length - 1 - i]) {
//       // If the characters don't match, the string is not a palindrome
//       return false;
//     }
//   }

//   // If all characters match, the string is a palindrome
//   return true;
// }


/* 
  Add your pseudocode here
  Convert the string to lower case and remove special characters 
  if the string has the same letters going reading
  forward as reading backwards
  return string
  if not return false
*/

/*
  Add written explanation of your solution here
  use .toLowerCase to convert it to lower case and then
  remove special characters
  I will spilt the string then run the reverse function on it
  then join it
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
