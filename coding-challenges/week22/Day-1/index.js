const exp = require("express")

const app = exp()

app.get("/userInfo", userData)

function userData(req, res){
    console.log("Received Request")
    const {name, age, id} = req.query
    res.send(`your Name Is ${name}<br><br>Your Age Is ${age} id`)
}

app.post('/userInfo', (req, res) => {
    console.log(req.body)

    const data = {...req.body}
    data.appendValue = "this is good"
    res.json(data)

})

app.listen(3000, function(){
    console.log("Server Started")
})