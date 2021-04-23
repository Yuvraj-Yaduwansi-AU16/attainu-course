const express = require('express');
const path = require('path');
const fs = require('fs');
const jsonfile = require('./datasets/posts.json');
const app = express();
app.use(express.json())

app.get('/users',(req,res)=>{
    res.json(jsonfile)
})

app.get('/users/:id',(req,res)=>{
    const uid = req.params.id;
    var found= false;
    jsonfile.forEach((user)=>{
        if(user.id === Number(uid)){
            found=true;
            return res.json(user)
        }
    })
    if(found === false) return res.send('Id Not match')
})

app.post('/users',(req,res)=>{
    const userdata = {...req.body}
    jsonfile.push(userdata);

    fs.writeFileSync(path.join(__dirname,'./datasets/posts.json'), JSON.stringify(jsonfile,null,4))

    res.send('Data Received and Added')
})

app.delete('/users/:id',(req,res)=>{
    const uid = req.params.id;
    const newData = jsonfile.filter((user)=>user.id!=Number(uid))
    fs.writeFileSync(path.join(__dirname,'./datasets/posts.json'), JSON.stringify(newData,null,4))
    res.json(newData)
})

app.put('/users/:id',(req,res)=>{
    const uid = req.params.id;
    const userdata = {...req.body}
    jsonfile.forEach((user)=>{
        if(user.id === Number(uid)){
            user.title = userdata.title;
            user.body = userdata.body;
        }
    })
    res.json(jsonfile)
})

app.listen(3000,()=>{
    console.log('Server Started');
})