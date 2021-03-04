const express = require("express")
const rtCitas = express.Router()
const daoCitas= require('../dao/daoCitas')

rtCitas.get('/nueva', (req,res)=>{
    res.render('nueva')
})

rtCitas.get('/listado',(req,res)=>{
    daoCitas.getCitas()
        .then(citas=>{
            res.json(citas)
        })
})

rtCitas.get('/eliminar/:id',(req,res)=>{
    let id=req.params.id
    daoCitas.deleteCita(id)
        .then(cita=>{
            if(cita) res.json(cita)
            else res.json(null)
        })
    
})

rtCitas.get('/detalle/:id',(req,res)=>{
    let id=req.body.id
    daoCitas.getCita(id)
        .then(cita=>{
            res.render('vercita',{cita:cita})
        })
})


rtCitas.get('/modificar/:id',(req,res)=>{
    let id=req.params.id
    daoCitas.getCita(id)
        .then(cita=>{
            res.render('modificar',{cita:cita})
        })
})

rtCitas.post('/modificar',(req,res)=>{
    daoCitas.editCita(req.body)
        .then(res.render('nueva'))
})

module.exports = rtCitas