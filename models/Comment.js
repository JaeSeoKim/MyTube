import monogoose from 'mongoose'

const CommentSchema = new monogoose.Schema({
  text: { type: String, required: 'Text is Required' },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const model = monogoose.model('Comment', CommentSchema)
export default model
