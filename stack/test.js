const Stack = require('./stack');
const fs = require('fs');
const { strictEqual } = require('assert');
const FILE_NAME = "stack.txt";
const stack = new Stack();
console.log(stack);
for(let i=1; i<=10; i++)
    stack.push(i);

console.log(stack)
console.log(stack.pop())
console.log(stack.pop(9))

async function write_file() {
    fs.writeFile(FILE_NAME, JSON.stringify(stack), [], err => {
        if(err) { console.log(err); }
    })
}
async function read_file() {
    return new Promise(res => {
        fs.readFile(FILE_NAME,'utf-8', (err, data) => {
            if(err) { console.log(err); }
            else { res(data)}
        })
    })
}

async function f() {
    await write_file();
    const a = await read_file();
    console.log(a);
}
f();