//configuring the express app
const express = require('express');
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutaUsuario');


const app = express();
app.use(express.json());

//configuring the port
app.set('port', config.app.port);

//rutashhhsh

app.use('/api/clientes', clientes);
app.use('/api/usuarios',usuarios);

//console.log(config.mysql)

//exporting the app
module.exports = app;