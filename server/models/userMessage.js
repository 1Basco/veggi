import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    userID: Number,
});

const UserMessage = mongoose.model('UserMessage', userSchema);

export default UserMessage;