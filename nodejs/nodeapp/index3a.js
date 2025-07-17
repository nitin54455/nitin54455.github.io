import http from "http"

const server=http.createServer((req,res)=>{
    res.end("this is port2 i have created ");
})

server.listen(8081,()=>{
    console.log("server is started")
})