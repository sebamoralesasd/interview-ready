// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  if (list1 === undefined || list2 === undefined) {
    return undefined;
  }
  let n1: number = 0;
  let n2: number = 0;
  let exp: number = 0;

  let p = list1;
  while (p !== undefined) {
    n1 += p.value * Math.pow(10, exp);
    exp += 1;
    p = p.next;
  }
  exp = 0;
  p = list2;
  while (p !== undefined) {
    n2 += p.value * Math.pow(10, exp);
    exp += 1;
    p = p.next;
  }

  let sum = n1 + n2;

  let dig = 0;
  let listSum = new LinkedList<number>();
  while (sum > 0) {
    dig = sum % 10;
    listSum.push(dig);
    sum -= dig;
    sum = sum / 10;
    exp += 1;
  }
  return listSum.head;
}
