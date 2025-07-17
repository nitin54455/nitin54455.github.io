const express = require("express");

const app = express();

app.listen(8080,()=>{
    console.log("server started")
});

app.use(express.json())

app.post("/",(req,res)=>{
    res.send("post request")
});
