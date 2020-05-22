import routes from './routes'
import multer from 'multer'

const multerVideo = multer({ dest: 'uploads/videos/' })
export const uploadVieoMiddleware = multerVideo.single('file')

const multerImg = multer({ dest: 'uploads/imgs/' })
export const uploadImgMiddleware = multerImg.single('avatar')

export const localMiddleware = (req, res, next) => {
  res.locals.sitename = 'MyTube'
  res.locals.routes = routes
  res.locals.loggedUser = req.user || null
  req.next()
}

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    req.flash('info', 'You are logged!!')
    res.redirect(routes.home)
  } else {
    next()
  }
}

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    req.flash('info', 'You need login!!')
    res.redirect(routes.home)
  }
}
