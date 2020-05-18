import express from 'express'
import routes from '../routes'
import { videoHome, videoSearch } from '../controllers/videoController'
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  postGithubLogIn,
  githubLogin
} from '../controllers/userController'
import { onlyPrivate, onlyPublic } from '../middlewares'
import passport from 'passport'

const globalRouter = express.Router()

// join area
globalRouter.get(routes.join, onlyPublic, getJoin)
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin)

// login area
globalRouter.get(routes.login, onlyPublic, getLogin)
globalRouter.post(routes.login, onlyPublic, postLogin)
globalRouter.get(routes.logout, onlyPrivate, logout)

// Github Login
globalRouter.get(routes.github, githubLogin)

globalRouter.get(
  routes.githubCallback,
  passport.authenticate('github', { failureRedirect: '/login' }),
  postGithubLogIn
)

globalRouter.get(routes.home, videoHome)
globalRouter.get(routes.search, videoSearch)

export default globalRouter
