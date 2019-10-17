const express = require('express')
const router = express.Router();

const pool = require('../db')

router.get('/', async (req, res)=>{
    let links = await pool.query('select * from links')
    res.render('links/list', {
        titulo: "Taller de Node.js",
        links: links
    })
})

router.get('/add', (req, res)=>{
    res.render('links/add', {
        titulo: "Taller de Node.js"
    })
})

router.post('/add', async (req, res)=>{
    // const {title, url, description, color} = req.body
    const {title, url, description, color} = req.fields
    const newLink = {
        title,
        url,
        description,
        color
    }
    console.log(newLink)
    await pool.query('insert into links set ?', [newLink])
    res.redirect('/links')
})

router.get('/delete/:id', async (req, res)=>{
    const{id} = req.params
    await pool.query('delete from links where id = ?', [id])
    res.redirect('/links')
})



module.exports = router;