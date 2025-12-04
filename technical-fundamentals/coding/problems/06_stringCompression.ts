// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  if (str.length === 0) {
    return str;
  }

  let comp: string = "";
  let currChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currChar) {
      count += 1;
    } else {
      comp += currChar + count;
      currChar = str[i];
      count = 1;
    }
  }
  comp += currChar + count;

  if (comp.length / 2 === str.length) {
    return str;
  } else {
    return comp;
  }
}

