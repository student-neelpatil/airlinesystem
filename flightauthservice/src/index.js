const express=require("express");
const {PORT}=require("./config/serverconfig");
const logger=require("./config/logger-config")
const apirouter=require('./routes/index')


function serverconnection(){
    const app=express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',apirouter);


    app.listen(PORT,()=>{
       try {
           logger.info(`server is connected at port:${PORT}`);
       } catch (error) {
        logger.error(error.message);
       }
    })
}

serverconnection();