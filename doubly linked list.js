class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);

        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    delete(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                if (current.prev !== null) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next !== null) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                this.size--;
                return;
            }

            current = current.next;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    getSize() {
        return this.size;
    }
}

// Usage
const dll = new DoublyLinkedList();

dll.append(1);
dll.append(2);
dll.append(3);

dll.prepend(0);

dll.display(); // Output: 0 1 2 3

dll.delete(1);

dll.display(); // Output: 0 2 3

console.log("Size:", dll.getSize()); // Output: Size: 3
