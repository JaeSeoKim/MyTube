import monogoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new monogoose.Schema({
  name: { type: String, required: 'Name is Required' },
  email: { type: String, required: 'Email is Required' },
  avatarUrl: String,
  facebook_id: Number,
  github_id: Number
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

const model = monogoose.model('User', UserSchema)

export default model
