const express=require("express");
const {PORT}=require("./config/serverconfig");


function serverconnection(){
    const app=express();

    app.listen(PORT,()=>{
        console.log(`server is connected at port:${PORT}`)
    })
}

serverconnection();