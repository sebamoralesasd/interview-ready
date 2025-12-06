// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  if (list1 === undefined || list2 === undefined) {
    return undefined;
  }
  let l1 = new LinkedList<T>(list1);
  let l2 = new LinkedList<T>(list2);
  let p = l1.head;
  let q = l2.head;

  while (p !== undefined) {
    q = l2.head;
    while (q !== undefined) {
      if (p.value === q.value) {
        return p;
      }
      q = q.next;
    }
    p = p.next;
  }
  return undefined;
}
