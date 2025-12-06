// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  let revlist = new LinkedList<T>();

  let p = head;
  while (p !== undefined) {
    revlist.pushRev(p.value);
    p = p.next;
  }

  p = head;
  let q = revlist.head;
  while (p !== undefined && q !== undefined) {
    if (p.value !== q.value) {
      return false;
    }

    p = p.next;
    q = q.next;
  }
  return true;
}
