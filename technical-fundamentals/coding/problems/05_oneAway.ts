// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  let i: number = 0;
  let j: number = 0;
  let count: number = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
      continue;
    }

    count = count + 1;
    if (count > 1) {
      return false;
    }

    if (str1[i] === str2[j + 1]) {
      j += 1;
      count -= 1;
      continue;
    } else if (str1[i + 1] === str2[j]) {
      i += 1;

      count -= 1;
      continue;
    }

    i += 1;
    j += 1;
  }

  count += Math.abs(str1.length - str2.length);

  return count < 2;
}
