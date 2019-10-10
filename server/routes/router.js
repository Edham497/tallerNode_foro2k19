const router = require('express').Router()

const posts = require('./api/posts.js')
router.use('/api/posts', posts)

router.get('/', (req, res)=>{
    res.send('HW')
})

module.exports = router