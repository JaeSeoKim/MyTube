import express from 'express'
import routes from '../routes'
import {
  videos,
  videoDetail,
  getVideoEdit,
  postVideoEdit,
  videoDelete,
  getUpload,
  postUpload
} from '../controllers/videoController'
import { uploadVieoMiddleware } from '../middlewares'
const videoRouter = express.Router()

// Video
videoRouter.get('/', videos)

// Video Upload
videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, uploadVieoMiddleware, postUpload)

// Video Edit
videoRouter.get(routes.videoEdit(), getVideoEdit)
videoRouter.post(routes.videoEdit(), postVideoEdit)

videoRouter.get(routes.videoDelete(), videoDelete)

videoRouter.get(routes.videoDetail(), videoDetail)

export default videoRouter
