import UserMessage from "../models/userMessage.js";
import TaskMessage from "../models/taskMessage.js";

export const getUsers = async (req, res) => {
    try {
        const userMessage = await UserMessage.find();
        console.log(userMessage);
        res.status(200).json(userMessage);
    } catch (error) {
        res.status(404).json({
            message: error.message
        }); 
    }
}

//getUser 
export const getUser = async (req, res) => {
    try {
        const userMessage = await UserMessage.findById(req.params.id);
        console.log(userMessage);
        res.status(200).json(userMessage);
    } catch (error) {
        res.status(404).json({
            message: error.message
        }); 
    }
}

export const createUser = async (req, res) => {
    try {
        const userMessage = new UserMessage(req.body);
        await userMessage.save();
        res.status(201).json({
            message: 'User created'
        });
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
}

//get the tasks of a user
export const getUserTasks = async (req, res) => {
    try {
        const taskMessage = await TaskMessage.find({taskBy: req.params.id});
        res.status(200).json(taskMessage);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

//delete a user and all the tasks of the user
export const deleteUser = async (req, res) => {
    try {
        await TaskMessage.deleteMany({taskBy: req.params.id});
        await UserMessage.deleteOne({_id: req.params.id});
        res.status(200).json({
            message: 'User deleted'
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}