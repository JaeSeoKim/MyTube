import dotenv from 'dotenv'
import passport from 'passport'
import GitHubStrategy from 'passport-github'
import FacebookStrategy from 'passport-facebook'
import User from './models/User'
import {
  githubLoginCallback,
  facebookLoginCallback
} from './controllers/userController'
import routes from './routes'
dotenv.config()

passport.use(User.createStrategy())
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}${routes.githubCallback}`
    },
    githubLoginCallback
  )
)
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}${routes.facebookCallback}`,
      profileFields: ['id', 'displayName', 'photos', 'email'],
      scope: ['public_profile', 'email']
    },
    facebookLoginCallback
  )
)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
