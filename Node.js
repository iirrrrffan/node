//--------sample server-----
// const http= require("http")
// http.createServer((req,res)=>{
//     res.write("irfan here")
//     res.end()
// }).listen(1001)



//------fs modules-------

// const fs=require("fs")
// fs.writeFile("File.txt","hyyy",(error)=>{
//     if(error)throw error  
// })


// const fs=require("fs")
// fs.appendFile("File.txt","helllo",(error)=>{
//     if(error)throw error
// })


// const fs=require("fs")
// fs.readFile("File.txt",(error)=>{
//     if(error)throw erro
//     console.log("kkkk")
// })

 const eventEmitter=require("events")
 const emitter=new eventEmitter();
 emitter.on("message",(data)=>{
    console.log(data);
 })
 emitter.emit("message",{txt:"userlogged"})
 emitter.emit("message",{txt:"userlogout"})



