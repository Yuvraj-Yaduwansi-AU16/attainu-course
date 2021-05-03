const express = require('express');
const router = new express.Router();
const Tasks = require('../models/tasks');
const auth = require('../middleware/auth');

router.get('/movies',auth,async(req,res)=>{
    try{
        const tasks=await Tasks.find({})

        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/movies/:id',auth,async(req,res)=>{
    const _id = req.params.id;
    try{
        const task = await Tasks.findById(_id)
        if(!task){
            return res.status(404).send('Movie Not Found')
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }

})

router.post('/movies',auth,async(req,res)=>{
    const task = new Tasks(req.body)
    try{
        await task.save()
        res.status(201).send(task)

    }catch(e){
        res.status(400).send(error)
    }

})

router.patch('/movies/:id',auth,async(req,res)=>{
    const _id = req.params.id;
    const allowedUpdates = ['title','year']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid Update Request'})
    }
    try{
        const task = await Tasks.findOne({_id})
        
        if(!task){
            return res.status(404).send('Movie Not Found')
        }
        updates.forEach((update)=> task[update] = req.body[update])
        task.save();
        res.send(task)

    }catch(e){
        res.status(400).send()
    }
})

router.delete('/movies/:id',auth,async(req,res)=>{
    try{
        const task = await Tasks.findOneAndDelete({_id:req.params.id})
        if(!task){
            return res.status(404).send('Movie Does Not Exist')
        }
        res.send(task)

    }catch(e){
        res.send(400).send()
    }
})

module.exports = router;