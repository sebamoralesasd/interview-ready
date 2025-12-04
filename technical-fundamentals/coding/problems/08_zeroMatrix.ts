// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  let m: number = matrix.length;
  let n: number = matrix[0].length;

  let rows = new Set<number>();
  let cols = new Set<number>();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  for (let r of rows) {
    matrix[r].fill(0);
  }
  for (let c of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][c] = 0;
    }
  }
}

