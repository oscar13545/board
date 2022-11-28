const express = require('express')
const app = express()


// Importa conexion con mongoDB
const db = require('./conexion')

//Importa rutas y modelos
const rutas = require('./Rutes/jugador')

app.use('/api', rutas)

//body parser

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


app.get('/',(req,res) => {
    res.end('Bienvenido')
})

app.listen(4001, function(){
    console.log('Bienvenido')
})