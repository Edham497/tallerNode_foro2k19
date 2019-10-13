const router = require('express').Router()
const mongodb = require('mongodb')

//get Posts
router.get('/', async (req, res) =>{
    const posts = await loadPosts()
    res.send(await posts.find({}).toArray())
})

//Add posts
router.post('/', async(req, res)=>{
    const posts = await loadPosts()
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    })
    res.status(201).send()
})

//Delete post
router.delete('/:id', async(req, res)=>{
    const posts = await loadPosts()
    await posts.deleteOne({id:new mongodb.ObjectID(req.params.id)})
    res.status(200).send()
})

async function loadPosts(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://Guest:foro2019@cluster0-jsdvz.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    return client.db('vue_express').collection('posts')
}

module.exports = router