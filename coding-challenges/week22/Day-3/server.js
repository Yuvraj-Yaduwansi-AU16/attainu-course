const express = require('express')
const app = express()
const axios = require('axios')


app.get('/postWithComment', async (req, res) => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments')
    const newusers = []
    for (i = 0; i < 100; i++) {
        newusers.push(posts.data[i])
        newusers[i].comments = []
        start = 5*i
        end = start + 5
        for (start; start < end; start++){
            newusers[i].comments.push(comments.data[start])
        }
    }
    res.send(newusers)
})


app.listen(3000)
console.log('server started')