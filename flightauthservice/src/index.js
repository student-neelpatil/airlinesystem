const express=require("express");
const {PORT}=require("./config/serverconfig");
const logger=require("./config/logger-config")


function serverconnection(){
    const app=express();

    app.listen(PORT,()=>{
       try {
           logger.info(`server is connected at port:${PORT}`);
       } catch (error) {
        logger.error(error.message);
       }
    })
}

serverconnection();