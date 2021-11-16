import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    taskID: Number,
    state: Boolean,
    description: String,
    taskBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserMessage'},
    user: String,
    createdAt: {
        type: Date, 
        default: new Date()
    },
})

const TaskMessage = mongoose.model('TaskMessage', taskSchema);

export default TaskMessage;