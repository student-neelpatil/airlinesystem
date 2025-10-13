const express=require('express');
const {PORT,DB_SYNC}=require('./config/serverconfig');

const app=express();

const startserver=()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server is running at port:${PORT}`);
    })
}

startserver();