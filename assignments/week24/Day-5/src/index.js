const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/userRouters');
const taskRouter = require('./routers/tasksRouters');
const port = process.env.PORT;
const app = express();

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log(`Server Started on port : ${port}`);
})
