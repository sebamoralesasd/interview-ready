// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f Hints: #72
// ```

import { unchangedTextChangeRange } from "typescript";
import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function deleteMiddleNode<T>(
  head: Node<T>,
  position: number,
): Node<T> | undefined {
  let list = new LinkedList<T>(head);

  if (list.length() <= 2) {
    return head;
  }
  let p = list.tail;
  while (p.next !== undefined) {
    if (position === 1) {
      p.next = p.next.next;
      return head;
    }
    position -= 1;
    p = p.next;
  }
  return head;
}
