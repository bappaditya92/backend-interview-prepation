
const EventEmitter = require("events");
//const { EventEmitter } = require("stream");

const eventEmitter = new EventEmitter();

eventEmitter.on('greet',()=>{
    console.log("Welcome to events in node.js");
    
});

//Emit the events

eventEmitter.emit('greet');