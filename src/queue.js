const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {

    this.q = {};

    this.h = null;

    this.t = null;

  }

  getUnderlyingList() {

    return this.h;

  }

  enqueue(value) {

    let v = new ListNode(value);

    if (!this.h || !this.t) {

      this.h = v;

      this.t = v;

      return;

    }
    this.t.next = v;
    this.t = v;
  }

  dequeue() {
    let result = this.h.value;

    this.h = this.h.next;

    return result;

  }
}

module.exports = {
  Queue
};
