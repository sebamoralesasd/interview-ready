// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number,
): Node<T> | undefined {
  if (head === undefined) {
    return head;
  }

  let p1: Node<T> | undefined = head;
  for (let i = 0; i < k; i++) {
    if (p1 === undefined) {
      return undefined;
    }
    p1 = p1.next;
  }

  let p2: Node<T> | undefined = head;
  while (p1 !== undefined) {
    p2 = p2.next;
    p1 = p1.next;
  }

  return p2;
}
