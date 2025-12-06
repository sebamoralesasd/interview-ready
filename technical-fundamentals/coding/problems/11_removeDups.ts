// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4
// 1 -> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  let list: LinkedList<T> = new LinkedList<T>(head);

  let values: Set<T> = new Set();

  list = list.filter((node) => {
    if (values.has(node.value)) {
      return false;
    } else {
      values.add(node.value);
      return true;
    }
  });

  return list.head;
}

export function removeDups_<T>(head?: Node<T>): Node<T> | undefined {
  if (head === undefined) {
    return;
  }
  let values: Set<T> = new Set();
  values.add(head.value);
  let p = head.next;
  let next = head.next;
  while (p !== undefined) {
    if (values.has(p.value)) {
      next = next.next;
    }
    head.next = next;
    p = p.next;
  }
  return head;
}
