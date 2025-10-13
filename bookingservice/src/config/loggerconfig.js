// src/logger.js
const { createLogger,format,transports }=require("winston");

const  { combine,timestamp,printf}=format;

const customformat=printf(({ level,message,timestamp})=>{
    return `{    Time: ${timestamp},
     Level :${level} ,
     Message :${message}
 } `
})

const logger=createLogger({
    format:combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        customformat
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'combined.logs'}),
    ],
});




module.exports= logger;