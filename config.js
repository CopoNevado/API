require('dotenv').config();

module.exports = {
    app: {
      port: process.env.PORT
  
    },
    mysql:({
      host: process.env.MYSQL_HOST || 'localhost', // SI ES NECESARIO PONER UN HOST
      user: process.env.MYSQL_USER || 'root', // SI ES NECESARIO PONER UN USUARIO
      password: process.env.MYSQL_PW || '', // SI ES NECESARIO PONER UNA CONTRASEÑA
      database: process.env.MYSQL_DB || 'server_api', //PONER UNA BASE DE DATOS
    }),           
  
  };