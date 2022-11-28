const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.56jc2bc.mongodb.net/?retryWrites=true&w=majority/Torneo');

const db = mongoose.connection

db.on('connected', ()=>{console.log('Se conectó correctamente a mongo')})
db.on('error', ()=>{console.log('No se pudo conectar correctamente a mongo')})

module.exports = mongoose