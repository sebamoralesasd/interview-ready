// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  if (list1 === undefined && list2 === undefined) {
    return undefined;
  }

  let n1: number = 0;
  let n2: number = 0;
  let p = list1;
  while (p !== undefined) {
    n1 = 10 * n1 + p.value;
    p = p.next;
  }

  p = list2;
  while (p !== undefined) {
    n2 = 10 * n2 + p.value;
    p = p.next;
  }

  let sum: number = n1 + n2;

  let listSum = new LinkedList<number>();
  let digits = 0;
  let n = sum;
  while (n > 0) {
    digits += 1;
    n = (n - (n % 10)) / 10;
  }
  while (digits > 0) {
    let res = Math.floor(sum / Math.pow(10, digits - 1));
    listSum.push(res);
    sum -= res * Math.pow(10, digits - 1);
    digits -= 1;
  }
  return listSum.head;
}
