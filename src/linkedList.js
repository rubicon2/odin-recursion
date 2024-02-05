export default class LinkedList {
  constructor(listItems, previousItem = null) {
    this.value = listItems.shift();
    this.prev = previousItem;
    this.next = listItems.length > 0 ? new LinkedList(listItems, this) : null;
  }

  toString() {
    if (!this.next) return this.value;
    return `${this.value} -> ${this.next.toString()}`;
  }

  length() {
    if (!this.next) return 1;
    return 1 + this.next.length();
  }

  head() {
    let current = this;
    while (current.prev) {
      current = current.prev;
    }
    return current;
  }

  tail() {
    let current = this;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  prepend(value) {
    const newItem = new LinkedList(value, this.prev);
    newItem.next = this;
    this.prev = newItem;
    // Return new head
    return newItem;
  }

  append(value) {
    const newItem = new LinkedList(value, this);
    newItem.next = this.next;
    this.next = newItem;
  }
}
