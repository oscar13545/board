const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemajugador = new schema({
    name : String,
    num: String,
    Equipo: String,
})

const schematablero = new schema({
    local : String,
    visitante: String,
    cuarto: String,
    equipolocal: String,
    equipovisitante: String,
    equipolocalname: String,
    equipovisitantename: String,
    validar: Boolean,
    equipo: String,
    equiponame: String
})




router.post('/equipo/post/:tagId', urlencodedParser ,function(req,res ) {
    const ModelJugador = mongoose.model(req.param("tagId"),  schemajugador)
    let nuevojugador = new ModelJugador({
        name: req.body.name,
        num: req.body.num, 
    })
    nuevojugador.save(function(err){
        if(!err){
            res.send('jugador agregado')

        }else{
            res.send(err)
        }
    })
})

router.delete('/equipo/delete/:tagId/:tagId1', urlencodedParser ,function(req,res ) {
    const ModelJugador = mongoose.model(req.param("tagId"),  schemajugador)
    ModelJugador.deleteOne({_id: req.param("tagId1")},function(err){
        if(!err){
            res.send('jugador agregado')

        }else{
            res.send(err)
        }
    })
})

router.get('/equipo/validar/:tagId/:tagId1', (req,res) => {
    const ModelJugador = mongoose.model(req.param("tagId"),  schemajugador)
    ModelJugador.find({num: req.param("tagId1")},function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})

router.get('/equipo/get/:tagId', (req,res) => {
    const ModelJugador = mongoose.model(req.param("tagId"),  schemajugador)
    ModelJugador.find({},function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})


router.get('/equiponame/validar/:tagId/:tagId1/:tagId2', (req,res) => {
    const ModelJugador = mongoose.model(req.param("tagId"),  schemajugador)
    
    ModelJugador.find({_id: req.param("tagId1"), Equipo: req.param("tagId2")},function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})

router.post('/equiponame/post/:tagId/:tagId1', urlencodedParser , (req,res) => {
    const ModelJugador = mongoose.model(req.param("tagId"),  schemajugador)
    ModelJugador.updateOne({_id: req.param("tagId1")},{$set:{Equipo: req.body.name}},function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})
//pases id del cambio y ademas el equipo en el primer parametro
router.post('/equipoigual/local/:tagId1', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model("cuartos" , schematablero)
    Modelfase.findOneAndUpdate( {_id: req.param("tagId1")},
        {equipolocalname: req.body.name},
        function(err){
        if(!err){
            res.send('jugador agregado')

        }else{
            res.send(err)
        }
    })
})

router.post('/equipoigual/visitante/:tagId1', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model("cuartos" , schematablero)
    Modelfase.findOneAndUpdate( {_id: req.param("tagId1")},
        {equipovisitantename: req.body.name},
        function(err){
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

router.post('/fase/post/:tagId', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    let nuevocuarto = new Modelfase({
        local: req.body.local,
        visitante: req.body.visitante,
        cuarto: req.body.cuarto,
        equipolocal: req.body.equipolocal,
        equipovisitante: req.body.equipovisitante,
        equipolocalname: req.body.equipolocalname,
        equipovisitantename: req.body.equipovisitantename,
        validar: req.body.validar
        
    })
    nuevocuarto.save(function(err){
        if(!err){
            res.send('jugador agregado')

        }else{
            res.send(err)
        }
    })
})

router.get('/fase/get/:tagId', (req,res) => {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    Modelfase.find({},function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})

router.get('/fase/get/:tagId/:tagId1', (req,res) => {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    Modelfase.find({ _id: req.param("tagId1") },function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})


router.post('/fase/update/:tagId/:tagId1', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    Modelfase.findOneAndUpdate({_id: req.param("tagId1")}, {
        local : req.body.local,
        visitante: req.body.visitante,
        cuarto: req.body.cuarto,
    },function(err){
        if(!err){
            res.send('cambio el tablero')

        }else{
            res.send(err)
        }
    })
})

router.post('/fase/ganador/:tagId1', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model("ganador",  schematablero)
    Modelfase.findOneAndUpdate({_id: req.param("tagId1")}, {
        equipo : req.body.equipo,
        equiponame: req.body.equiponame,
        validar: req.body.validar,
    },function(err){
        if(!err){
            res.send('cambio el tablero')

        }else{
            res.send(err)
        }
    })
})

router.get('/fase/ganador/get', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model("ganador",  schematablero)
    Modelfase.find({},function(docs, err){
        if(!err){
            res.send(docs)

        }else{
            res.send(err)
        }
    })
})


router.post('/fase/update/:tagId/:tagId1/local', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    Modelfase.findOneAndUpdate({_id: req.param("tagId1")}, {
        equipolocal : req.body.ganador,
        equipolocalname: req.body.ganadorname,
    },function(err){
        if(!err){
            res.send('cambio el tablero')

        }else{
            res.send(err)
        }
    })
})

router.post('/fase/update/:tagId/:tagId1/visitante', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    Modelfase.findOneAndUpdate({_id: req.param("tagId1")}, {
        equipovisitante : req.body.ganador,
        equipovisitantename: req.body.ganadorname,
    },function(err){
        if(!err){
            res.send('cambio el tablero')
           

        }else{
            res.send(err)
           
        }
    })
})

router.post('/fase/validar/:tagId/:tagId1', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    Modelfase.findOneAndUpdate({_id: req.param("tagId1")}, {
        validar : true,
    },function(err){
        if(!err){
            res.send('cambio el tablero')

        }else{
            res.send(err)
          
        }
    })
})

router.delete('/fase/delete/ganador', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model("ganador",  schematablero)
    Modelfase.findOneAndUpdate({_id: "6381b443583a4163e579b045"}, {
        equipo: "",
        equiponame: "",
        validar : false,
    },function(err){
        if(!err){
            res.send('cambio el tablero')

        }else{
            res.send(err)
            
        }
    })
})

router.delete('/fase/delete/:tagId/:tagId1', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model(req.param("tagId"),  schematablero)
    Modelfase.findOneAndUpdate({_id: req.param("tagId1")}, {
        local: "0",
        visitante: "0",
        cuarto: "1",
        equipolocal: "",
        equipovisitante: "",
        equipolocalname: "",
        equipovisitantename: "",
        validar : false,
    },function(err){
        if(!err){
            res.send('cambio el tablero')
        }else{
            res.send(err)
         
        }
    })
})

router.delete('/fase/deleteall/cuartos/:tagId1', urlencodedParser ,function(req,res ) {
    const Modelfase = mongoose.model("cuartos",  schematablero)
    Modelfase.findOneAndUpdate({_id: req.param("tagId1")}, {
        local: "0",
        visitante: "0",
        cuarto: "1",
        equipolocalname: "",
        equipovisitantename: "",
    },function(err){
        if(!err){
            res.send('cambio el tablero')
        }else{
            res.send(err)
            
        }
    })
})

module.exports = router