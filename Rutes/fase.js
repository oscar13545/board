const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })




const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemajugador = new schema({
    name : String,
    num: String
})

const schemanameeq = new schema({
    name : String
})





router.post('/equipo/post', urlencodedParser ,function(req,res ) {
    const ModelJugador = mongoose.model("equipo2",  schemajugador)
    let nuevojugador = new ModelJugador({
        name: req.body.name,
        num: req.body.num
    })
    nuevojugador.save(function(err){
        if(!err){
            res.send('jugador agregado')

        }else{
            res.send(err)
        }
    })
})


router.post('/equipo/update', urlencodedParser ,function(req,res ) {
    ModelJugador.findOneAndUpdate({_id: req.body.id}, {
        name: req.body.name,
        num: req.body.num
    },function(err){
        if(!err){
            res.send('jugador agregado')

        }else{
            res.send(err)
        }
    })
})

router.get('/fase/get/:tagId', (req,res) => {

    const ModelJugador = mongoose.model(req.param("tagId"),  schemajugador)
    ModelJugador.find({},function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})



module.exports = router