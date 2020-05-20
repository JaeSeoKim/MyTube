import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: 'Name is Required' },
  email: { type: String, required: 'Email is Required' },
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

const model = mongoose.model('User', UserSchema)

export default model
