const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path')
const rutas = require('./routes')(); 
const configs = require('./config');

//integracion con las configuraciones 
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json()); //body-parser
server.use('/', rutas);//integracion de las rutas
server.set('view engine', 'pug')
server.set('views', path.join(__dirname, './views'));//integracion de pug
server.use(express.static('public'))//cargando archivos estaticos

// variables locales
const ambiente = configs[server.get('env')]
server.locals.siteName = ambiente.siteName;

const fecha = new Date()
server.locals.actualYear = fecha.getFullYear();



//puerto a escuchar 
server.listen(9000, (req, res) => console.log('Server up, port 9000') )