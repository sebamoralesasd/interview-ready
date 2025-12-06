// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head;
    this.tail = head;
  }

  push(value: T) {
    if (this.tail === undefined) {
      this.head = { value };
      this.tail = this.head;
    } else {
      this.tail.next = { value };
      this.tail = this.tail.next;
    }
  }

  pushRev(value: T) {
    this.head = { value };
    this.tail = this.head;
  }

  filter(fn: (node: Node<T>) => boolean): LinkedList<T> {
    let p = this.head;
    let list = new LinkedList<T>();

    while (p !== undefined) {
      if (fn(p)) {
        list.push(p.value);
      }
      p = p.next;
    }
    return list;
  }
  visit() {}
  remove() {}
  //  remove(value: T): LinkedList<T> {
  //    if (this.head.value === value) {
  //      return head.next;
  //    }
  // let p = this.head;
  // 	while(p !== undefined) {
  // 		if(p.value === value) {
  //
  // 		}
  // 	}
  //  }
  merge(right: LinkedList<T>): LinkedList<T> {
    let p = right.head;
    while (p !== undefined) {
      this.push(p.value);
      p = p.next;
    }
    return this;
  }
  print() {
    let p = this.head;
    while (p !== undefined) {
      p = p.next;
    }
  }

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length(): number {
    let count = 0;
    let p = this.tail;
    while (p !== undefined) {
      count += 1;
      p = p.next;
    }
    return count;
  }
}

const list = new LinkedList();
