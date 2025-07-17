import express from "express"
const app=express();

app.listen(8080,()=>{
    console.log("server started");
});

// app.get("/",(req,res)=>{
//     res.send("Get request");
// });

// app.post("/",(req,res)=>{// send data to the server 
//     res.send("post request");
// });

// app.delete("/",(req,res)=>{
//     res.send("delete request");
// });

// app.patch("/",(req,res)=>{  /// upfate data
//     res.send("patch request");
// });


//static route 

// app.get("/name",(req,res)=>{
//     res.send("Good moring");
// })

// // dynamic routing 
// app.get("/:name",(req,res)=>{
//     res.send(req.params.name)
// });


// app.get("/:name/:age",(req,res)=>{
//     res.send(req.params.name+req.params.age);
// });

// app.get("/query",(req,res)=>{
//     res.send(res.query.name+res.query.age);
// });//URL: http://localhost:8080/query?name=rohit&age=21
// Output: rohit21
// req.query.name and req.query.age are values from the URL after ?


// app.get("/auth",(req,res)=>{
//     res.send(req.headers.authorization);
// });


// app.get("/ab*cd", (req, res) => {
//   res.send("Hello from wildcard route");
// });

app.get("/product",(req,res)=>{
    res.status(201).json({id:1,name:"product 1",price:34})
});