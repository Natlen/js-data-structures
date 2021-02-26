const Queue = require('./queue');
queue = new Queue(1);
console.log(queue);
queue.insert(2);
console.log(queue);
queue.insert(3);
console.log(queue);
queue.remove();
console.log(queue);