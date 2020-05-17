import app from './app'
import routes from './routes'
import multer from 'multer'

const multerVideo = multer({ dest: 'uploads/videos/' })
export const uploadVieoMiddleware = multerVideo.single('file')

export const localMiddleware = (req, res, next) => {
  app.locals.sitename = 'MyTube'
  app.locals.routes = routes
  app.locals.user = {
    isAuthenticated: true,
    id: 12
  }
  req.next()
}
