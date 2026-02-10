import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
title: String,
completed: { type: Boolean, default: false },
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})


export default mongoose.model('Task', TaskSchema)