import dotenv from 'dotenv'
import passport from 'passport'
import GitHubStrategy from 'passport-github'
import User from './models/User'
import { githubLoginCallback } from './controllers/userController'
import routes from './routes'
dotenv.config()

passport.use(User.createStrategy())
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:3000${routes.githubCallback}`
    },
    githubLoginCallback
  )
)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
