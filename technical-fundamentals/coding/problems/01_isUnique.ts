// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  let strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    for (let j = i + 1; j < strLen; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
