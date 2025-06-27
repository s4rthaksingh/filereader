const fs = require("fs");

fs.readdir("./filefolder",(err,files)=>{
    if(err) return console.log(err);
    else{
        fs.readFile("./filefolder/" + files[0],{encoding:"utf-8"},(err,text)=>{
            if(err) return console.log(err);
            console.log(text);
        });
    }
})