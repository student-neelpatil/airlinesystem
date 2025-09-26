const express = require('express');
const { PORT } = require('./config/serverconfig')
const logger = require('./config/logger_config');
const apiroutes = require('./routes/index');
// const db=require('')
const {Airport,City}=require('./models/index');
const { where } = require('sequelize');

const serverconnect = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api', apiroutes);


  app.listen(PORT, async() => {

    logger.info(`server is running at port: ${PORT}`)
    
    // const city=await City.findAll({
    //   where:{
    //     id:1
    //   }
    // })

    // const airport=await Airport.findAll({
    //   include:'city'
    // })
    // console.log(JSON.stringify(airport, null, 2));

  //   await Airport.destroy({
  //   where:{
  //     id:2
  //   }
  // })
    const airports=await Airport.findAll({
      include:'city'
    });
    console.log(JSON.stringify(airports, null, 2));

  });

  
    
}


serverconnect();