// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

export default function rotateMatrix(matrix: Matrix) {
  let n: number = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let swap = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = swap;
    }
  }

  matrix.forEach((row) => row.reverse());
}

