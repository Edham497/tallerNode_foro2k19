const express = require('express')
const router = express.Router();

const pool = require('../db')

router.get('/', async (req, res)=>{
    // let posts = await pool.query('select * from posts')
    res.render('posts/list', {
        titulo: "Taller de Node.js",
        // posts: posts
    })
})

router.get('/add', (req, res)=>{
    res.render('posts/add', {
        titulo: "Taller de Node.js"
    })
})

router.post('/add', async (req, res)=>{
    
    // await pool.query('insert into posts set ?', [newPost])
    res.redirect('/posts')
})

module.exports = router;