const {Buffer} = require("buffer");
const { log } = require("console");

// const buf = Buffer.alloc(4);
// console.log(buf);

// const buf = Buffer.from('Hello bappaditya');
// console.log(buf)
// console.log(buf.toString());


// const buf2 = Buffer.allocUnsafe(10);
// console.log(buf2);

// const buf = Buffer.alloc(10);
// buf.write('Hello');
// console.log(buf.toString());

const buf = Buffer.from("Hello");
// console.log(buf.toString());
// console.log(buf.toString("utf-8", 0,10));
// buf[0] = 0x4A;
// console.log(buf);
// console.log(buf.toString())

const buf1 = Buffer.from(" world");

const merged = Buffer.concat([buf,  buf1])
console.log(merged);
console.log(merged.toString());
console.log(merged.length);
