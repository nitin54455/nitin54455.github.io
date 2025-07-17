//LOGGER

import express from "express"
const app=express();


const logger=(req,res,next)=>{
    req.message="Logger";
    next();
}

app.get("/product",logger,(req,res,logger)=>{
    res.send(req.message);
});

app.listen(8080,()=>{
    console.log("server started");
})