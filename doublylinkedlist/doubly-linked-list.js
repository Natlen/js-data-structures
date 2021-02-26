const Node = require('./node');
class DoublyLinkedList {
    constructor(data) { (data == null ? this.head = null : this.head = new Node(data))}
    insert(data) {
        if(data == null)
            return;
        if(this.head == null)
        {
            this.head = new Node(data);
            return;
        }
        let prev, placeholder = this.head;
        while(placeholder !=null)
        {
            prev = placeholder;
            placeholder = placeholder.next;
        }
        prev.next = placeholder = new Node(data);
        placeholder.prev  = prev;
       
    }
    remove(data) {
        if(data == null || this.head == null)
            return;
        if(this.head.data == data)
        {
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }
        let prev, placeholder = this.head;
        while(placeholder !=null)
        {
            if(placeholder.data == data)
            {
                prev.next = placeholder.next;
                placeholder.next != null ? placeholder.next.prev = prev : placeholder = null;
                return;
            }
            prev = placeholder;
            placeholder = placeholder.next;
        }
    }
    toString() {
        let placeholder = this.head;
        let result_string = '{\n';
        while(placeholder !=null)
        {
            result_string += ' ' + `{ data : ${placeholder.data},\n prev : ${placeholder.prev != null ? placeholder.prev.data : null},\n next : ${placeholder.next != null ? placeholder.next.data : null}\n } `;
            placeholder = placeholder.next;
        }
        return result_string +'\n}'

           
    }
    print() { let placeholder = this.head; while(placeholder !=null) { console.log(placeholder); placeholder = placeholder.next;}}
}
module.exports = DoublyLinkedList;