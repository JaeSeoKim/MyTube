import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
  fileUrl: { type: String, required: 'FileUrl is Required' },
  title: { type: String, required: 'Title is Required' },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

const model = mongoose.model('Video', VideoSchema)
export default model
