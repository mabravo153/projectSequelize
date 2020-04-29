const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path')
const rutas = require('./routes')(); 


//integracion con las configuraciones 
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json()); //body-parser
server.use('/', rutas);//integracion de las rutas
server.set('view engine', 'pug')
server.set('views', path.join(__dirname, './views'));//integracion de pug
server.use(express.static('public'))//cargando archivos estaticos

//puerto a escuchar 
server.listen(9000, (req, res) => console.log('Server up, port 9000') )