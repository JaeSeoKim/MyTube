import routes from './routes'
import multer from 'multer'

const multerVideo = multer({ dest: 'uploads/videos/' })
export const uploadVieoMiddleware = multerVideo.single('file')

export const localMiddleware = (req, res, next) => {
  res.locals.sitename = 'MyTube'
  res.locals.routes = routes
  res.locals.user = req.user || null
  req.next()
}

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home)
  } else {
    next()
  }
}

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.redirect(routes.home)
  }
}
