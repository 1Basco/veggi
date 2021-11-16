import mongoose from "mongoose";
import TaskMessage from "../models/taskMessage.js";
import UserMessage from "../models/userMessage.js";

export const getTasks = async (req, res) => {
    try {
        const taskMessages = await TaskMessage.find();
        //Não funciona ainda então vou passar o username direto na criação da task
        //insert the username of each that match the taskBy task on the taskMessages object json
        // for (let i = 0; i < taskMessages.length; i++) {
        //     const userMessage = await UserMessage.findOne({ _id: taskMessages[i].taskBy });
        //     taskMessages[i].taskBy = userMessage.username;
        // }
        console.log(taskMessages);
        res.status(200).json(taskMessages);
        
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
        
}

//get task and put the usename in the taskMessage based on de taskBy id
export const getTask = async (req, res) => {
    try {
        const taskMessage = await TaskMessage.findById(req.params.id);
        const userMessage = await UserMessage.findById(taskMessage.taskBy);
        res.status(200).json({
            taskMessage,
            userMessage
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

      

export const createTask = async (req, res) => {
    const task = req.body;
    // chekc if user exists in the username variable
    const user = await UserMessage.findOne({ username: task.username });
    console.log(user);

    if(user === null) {
        //create user
        const newUser = new UserMessage(task);
        const newTask = new TaskMessage(task)
        try {
            await newUser.save();
            //get the user id and add it to the task
            const userId = newUser._id;
            const username = newUser.username;
            //add the username to the task
            newTask.taskBy = userId;
            newTask.user = username;
            await newTask.save();
            console.log(newTask);
            res.status(201).json(newTask);
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
            
        }
    }else{
        //create task
        const newTask = new TaskMessage(task)
        try {
            //get the user id and add it to the task
            const userId = user._id;
            const username = user.username;
            newTask.taskBy = userId;
            newTask.user = username;
            await newTask.save();
            console.log(newTask);
            res.status(201).json(newTask);
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
            
        }
    }
        
}

export const updateTask = async (req, res) => {
    const { id: _id } = req.params;
    const task = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }
    const updatedTask = await TaskMessage.findByIdAndUpdate(_id, task, { new: true });
    console.log(updatedTask);
    res.json(updatedTask);
}


export const deleteTask = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }
    const deletedTask = await TaskMessage.findByIdAndDelete(id);
    console.log(deletedTask);
    res.json({ message: 'Task deleted' });
}

