const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

let counter= 0;
var obj = {
    VisitCount: 0
};
app.get('/',(req,res)=>{
    obj.VisitCount = ++counter;
    var json = JSON.stringify(obj);
    const data = fs.writeFile('./test.json',json,'utf8',function(err){
        if (err) throw err
    })
    res.send(data)

})

app.get('/reset',(req,res)=>{
    obj.VisitCount = 0;
    var json = JSON.stringify(obj);
    fs.writeFile('./test.json',json,'utf8',function(err){
        if (err) throw err
    })
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(3000,()=> console.log('Sending request'))