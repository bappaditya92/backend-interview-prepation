
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet",(username)=>{
    console.log(`Welcome ${username} to events in node.js`);
    
});

eventEmitter.on("greet", (username)=>{
    console.log(`welcome ${username} to the events`);
    
})
//Emit the events
const myListener = ()=>{
    console.log("I am a test lister");
    
}
eventEmitter.on("test", myListener)
eventEmitter.emit("test")
eventEmitter.emit("test")
eventEmitter.emit("test")
eventEmitter.removeListener("test", myListener)
eventEmitter.emit("test")
console.log(eventEmitter.listeners("test"));

eventEmitter.once("pushnotify", ()=>{
    console.log("This events will run once");
    
})

eventEmitter.emit("greet", "bappaditya");
eventEmitter.emit("greet", "sinha");
eventEmitter.emit("pushnotify");
eventEmitter.emit("pushnotify");

console.log(eventEmitter.listeners("greet"));
