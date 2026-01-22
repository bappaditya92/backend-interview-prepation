const ChatRoom = require("./chatRoom.js")

const chat = new ChatRoom();

chat.on("join",(user)=>{
    console.log(`${user} is joined`)

})

chat.on("message",(user, message)=>{
    console.log(`${user}: ${message}`)

})

chat.on("leave",(user)=>{
    console.log(`${user} is left the chat`)

})

//simulating the chat

chat.join("Adi");
chat.join("Rishabh");

chat.sendMessage("Adi", "hey Rishabh, Hello to everyone");
chat.sendMessage("Rishabh", "hey Adi, Hello to everyone");

chat.leave("Adi");
chat.sendMessage("Adi", "this message wont be sent")
chat.leave("Rishabh")