const Node = require('./node');
class Queue {
    constructor(data) { data == null ? this.tail = this.head = null : this.tail = this.head = new Node(data); }
    insert(data) {
        if(data == null)
            return;
        if(this.head == null)
        {
            this.head = this.tail = new Node(data);
            return;
        }
        this.tail.next = new Node(data);
        this.tail = this.tail.next;
    }
    remove() {
        if( this.head == null)
            return;
        this.head = this.head.next;
    }
}
module.exports = Queue;