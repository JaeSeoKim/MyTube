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
