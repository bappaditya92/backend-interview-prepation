const EventEmittter = require("events");

class Chat extends EventEmittter{
   sendMessage(msg){
    console.log(`message sent: ${msg}`);
    this.emit("messageReceived", msg)
    
   } 
}

const chat = new Chat()
chat.on("messageReceived",(msg)=>{
    console.log(`new message: ${msg}`);
    
})

//trigger event

chat.sendMessage("Hello Bappaditya");