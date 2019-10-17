const express = require('express')
const router = express.Router();

const pool = require('../db')

router.get('/', async (req, res)=>{
    let posts = await pool.query('select * from post')
    res.render('posts/list', {
        titulo: "Taller de Node.js",
        posts: posts
    })
})

router.get('/add', (req, res)=>{
    res.render('posts/add', {
        titulo: "Taller de Node.js"
    })
})

router.post('/add', async (req, res)=>{
    const {title, autor} = req.fields
    let dir = `${req.files.archivo.path}`
    const newPost = {
        title,
        autor,
        dir: dir.split("\\")[3]
    }
    // console.log(newPost.dir)
    await pool.query('insert into post set ?', [newPost])
    res.redirect('/posts')
})


router.get('/delete/:id', async (req, res)=>{
    const{id} = req.params
    await pool.query('delete from post where id = ?', [id])
    res.redirect('/posts')
})

module.exports = router;