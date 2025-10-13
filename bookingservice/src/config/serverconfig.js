const doternv=require('dotenv');

doternv.config();

module.exports={
    PORT:process.env.PORT,
    DB_SYNC:process.env.DB_SYNC
}
