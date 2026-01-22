
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('greet',(username)=>{
    console.log(`Welcome ${username} to events in node.js`);
    
});

//Emit the events

eventEmitter.emit('greet', 'bappaditya');