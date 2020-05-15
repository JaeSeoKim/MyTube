import monogoose from 'mongoose'

const VideoSchema = new monogoose.Schema({
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

  comment: [
    {
      type: monogoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

const model = monogoose.model('Video', VideoSchema)
export default model
