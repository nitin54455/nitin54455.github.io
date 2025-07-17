//creating a server 
import http from "http"

const server=http.createServer((req,res)=>{
    res.end("i am learnig how to craete server ");
})

server.listen(8080,()=>{
    console.log("server is started");
})