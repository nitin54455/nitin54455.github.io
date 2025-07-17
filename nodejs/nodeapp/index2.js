import fs from "fs"

fs.writeFile("myFile.txt","hello world",(err)=>{// write and create the file 
    if(err) throw err;
});

fs.rename("myFile.txt","newFile",(err)=>{
    if(err) throw err;

});

fs.appendFile("myFile.txt","this is last",(err)=>{
    if(err) throw err;
})

fs.unlink("myFile",(err)=>{  // delete the file
    if(err) throw err;
})
