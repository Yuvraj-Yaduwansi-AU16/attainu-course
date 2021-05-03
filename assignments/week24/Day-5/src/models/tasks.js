const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
})

const Tasks = mongoose.model('Movies',taskSchema)

module.exports = Tasks