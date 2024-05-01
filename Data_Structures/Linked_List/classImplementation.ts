type DefaultNode<T> = null | INode<T>;

interface INode<T> {
  data: T;
  next: DefaultNode<T>;
}

interface IList<T> {
  head: DefaultNode<T>;
  size: number;
}

class LinkedNode<T> implements INode<T> {
  data: T;
  next: DefaultNode<T>;

  constructor(data: T, next: DefaultNode<T>) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<K extends number, T = string> implements IList<T> {
  head: DefaultNode<T>;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data: T) {
    this.head = new LinkedNode(data, this.head);
    this.size++;
  }

  insertAtEnd(data: T) {
    if (!this.head) {
      this.insertAtStart(data);
    } else {
      let currentHead = this.head;

      while (currentHead.next) {
        currentHead = currentHead.next;
      }

      currentHead.next = new LinkedNode(data, null);
      this.size++;
    }
  }

  insertAtIndex(data: T, index: K) {
    if (index > this.size) {
      return 'Please pass a valid index';
    } else if (index === 0) {
      this.insertAtStart(data);
    } else {
      let node = new LinkedNode(data, null);
      let currentHead = this.head;
      let previousHead = null;
      let count = 0;

      while (count < index) {
        previousHead = currentHead;
        currentHead = currentHead?.next || null;

        count++;
      }

      node.next = currentHead;
      previousHead && (previousHead.next = node);
      this.size++;
    }
  }

  getAtIndex(index: K) {
    if (index > this.size) {
      return 'Please pass a valid index';
    } else {
      let currentHead = this.head;
      let count = 0;

      while (count < index) {
        currentHead = currentHead?.next || null;
        count++;
      }

      return currentHead;
    }
  }

  removeAtIndex(index: K) {
    if (index > this.size) {
      return 'Please pass a valid index';
    } else {
      let currentHead = this.head;
      let previousHead = null;
      let count = 0;

      if (index === 0) {
        this.head = currentHead?.next || null;
      } else {
        while (count < index) {
          previousHead = currentHead;
          currentHead = currentHead?.next || null;
          count++;
        }

        previousHead && (previousHead.next = currentHead?.next || null);
      }

      this.size--;
    }
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printData() {
    let currentHead = this.head;

    while (currentHead?.data) {
      console.log(currentHead.data);
      currentHead = currentHead.next;
    }
  }
}

const linkedList = new LinkedList();

export default linkedList;
