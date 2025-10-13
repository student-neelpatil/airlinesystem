const express=require('express');
const {PORT,DB_SYNC}=require('./config/serverconfig');
const logger=require('./config/loggerconfig');
// const db=require('./models/index');



const app=express();

const startserver=()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.listen(PORT,async()=>{
        try {
            logger.info(`server is running at port:${PORT}`);

            // if(DB_SYNC){
            //   await db.sequelize.sync({ alter: true });
            //   logger.info('Database synced successfully');
            // }
            


        } catch (error) {
            logger.error(error);
        }
          
    })
}

startserver();