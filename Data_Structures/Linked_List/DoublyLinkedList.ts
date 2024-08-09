interface IDoublyLinkedNode {
  data: string;
  next: IDoublyLinkedNode | null;
  previous: IDoublyLinkedNode | null;
}

interface IDoublyLinkedList {
  head: IDoublyLinkedNode | null;
  size: number;
}

class DoublyLinkedNode implements IDoublyLinkedNode {
  data: string;
  next: IDoublyLinkedNode | null;
  previous: IDoublyLinkedNode | null;

  constructor(data: string, next: IDoublyLinkedNode | null = null, previous: IDoublyLinkedNode | null = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList implements IDoublyLinkedList {
  head: IDoublyLinkedNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data: string) {
    const newNode = new DoublyLinkedNode(data, this.head);

    if (this.head) {
      this.head.previous = newNode;
    }

    this.head = newNode;
    this.size++;
  }

  insertAtEnd(data: string) {
    if (!this.head) {
      this.insertAtStart(data);
    } else {
      const newNode = new DoublyLinkedNode(data);
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      newNode.previous = currentNode;
      currentNode.next = newNode;
      this.size++;
    }
  }

  insertAtIndex(data: string, index: number) {
    if (index > this.size || index < 0) {
      return 'Invalid index';
    } else if (index === 0) {
      this.insertAtStart(data);
    } else {
      const newNode = new DoublyLinkedNode(data);
      let currentNode = this.head;
      let count = 0;

      while (count !== index - 1) {
        currentNode = currentNode && currentNode.next;
        count++;
      }

      const nextNode = currentNode && currentNode.next;

      newNode.next = nextNode;
      newNode.previous = currentNode;
      currentNode && (currentNode.next = newNode);
      this.size++;
    }
  }

  removeAtIndex(index: number) {
    if (index > this.size || index < 0) {
      return 'Invalid index';
    } else if (index === 0) {
      if (!this.head || !this.head.next) {
        this.removeList();
      } else {
        const headNode = this.head.next;

        headNode.previous = this.head.previous;
        this.head = headNode;
        this.size--;
      }
    } else {
      let currentNode = this.head;
      let count = 0;

      while (count !== index - 1) {
        currentNode = currentNode && currentNode.next;
        count++;
      }

      const nextNode = currentNode && currentNode.next && currentNode.next.next;
      nextNode && (nextNode.previous = currentNode);
      currentNode && (currentNode.next = nextNode);
      this.size--;
    }
  }

  removeList() {
    this.head = null;
    this.size = 0;
  }

  getAtIndex(index: number) {
    if (index > this.size || index < 0) {
      return 'Invalid index';
    } else {
      let currentNode = this.head;
      let count = 0;

      while (count < index) {
        currentNode = currentNode && currentNode.next;
        count++;
      }

      return currentNode;
    }
  }

  reverseList() {
    let currentNode = this.head;
    let previous = null;

    while (currentNode) {
      previous = currentNode.previous;
      currentNode.previous = currentNode.next;
      currentNode.next = previous;
      currentNode = currentNode.previous;
    }

    this.head = previous && previous.previous;
  }

  printData() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const doubleLinkedList = new DoublyLinkedList();

export default doubleLinkedList;
