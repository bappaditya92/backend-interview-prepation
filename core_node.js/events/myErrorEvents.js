const EventEmittter = require('events');
const eventEmitter = new EventEmittter();

eventEmitter.on('error', (err)=>{
    console.error(`Error occure: ${err.message}`)
    
})
eventEmitter.emit('error', new Error('Something went wrong'))