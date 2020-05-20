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
  githubLogin,
  getMyProfile,
  facebookLogin,
  postFacebookLogin
} from '../controllers/userController'
import { onlyPrivate, onlyPublic, uploadImgMiddleware } from '../middlewares'
import passport from 'passport'

const globalRouter = express.Router()

// join area
globalRouter.get(routes.join, onlyPublic, getJoin)
globalRouter.post(
  routes.join,
  onlyPublic,
  uploadImgMiddleware,
  postJoin,
  postLogin
)

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

// Facebook Login
globalRouter.get(routes.facebook, facebookLogin)
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  postFacebookLogin
)

globalRouter.get(routes.myProfile, onlyPrivate, getMyProfile)
globalRouter.get(routes.home, videoHome)
globalRouter.get(routes.search, videoSearch)

export default globalRouter
