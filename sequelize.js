//db connection sequelize

const { Sequelize } = require('sequelize');



const dbconnect=(database,username,password,host)=>{
    const sequelize = new Sequelize(database, username, password, {
        host: host,
        dialect:'mysql'
      });
      return sequelize;
}
module.exports=dbconnect;


