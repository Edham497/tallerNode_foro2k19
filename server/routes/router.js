// Este modulo almacenara las rutas de la aplicacion

const express = require('express')
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index',{
        titulo: "Taller de Node.js"
    })
})

router.get('/external/:url', (req, res)=>{
    // res.send(req.params)
    res.redirect('https://' + req.params.url);
})

module.exports = router