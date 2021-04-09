const everdayfun = require("everyday-fun");
const randomcolor = require('randomcolor');
const color = randomcolor({
    format: 'rgb'
 });
 const date = new Date();
const quote = everdayfun.getRandomQuote();
const joke = everdayfun.getRandomJoke();
const riddle = everdayfun.getRandomRiddle()
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(quote.quote)
})
app.get('/joke',(req,res)=>{
    res.send(joke.body)
})
app.get('/riddle',(req,res)=>{
    res.send(riddle.riddle)
})
app.get('/color',(req,res)=>{
    res.send(color)
})

app.get('/date',(req,res)=>{
    res.send(date)
})

app.listen(3000,()=>{
    console.log('Sending Request');
})