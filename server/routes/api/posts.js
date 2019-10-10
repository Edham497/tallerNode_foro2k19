const router = require('express').Router()
const mongodb = require('mongodb')

//get Posts
router.get('/', async (req, res) =>{
    const posts = await loadPosts()
    res.send(await posts.find({}).toArray())
})

async function loadPosts(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://Guest:foro2019@cluster0-jsdvz.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    return client.db('vue_express').collection('posts')
}

module.exports = router