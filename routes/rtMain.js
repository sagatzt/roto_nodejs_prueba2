const express = require('express')
const rtMain = express.Router()


//aqui te creas las rutas get, post, etc.. que necesies

rtMain.get('/', function (req, res) {
    res.render('home')
})

rtMain.get('/quienes-somos', function (req, res) {
    res.render('quienes-somos')
})

rtMain.get('/donde-estamos', function (req, res) {
    res.render('donde-estamos')
})

rtMain.get('/404', function (req, res) {
    res.render('404')
})



module.exports=rtMain