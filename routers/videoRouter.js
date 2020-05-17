import express from 'express'
import routes from '../routes'
import {
  videoDetail,
  getVideoEdit,
  postVideoEdit,
  videoDelete,
  getUpload,
  postUpload
} from '../controllers/videoController'
import { uploadVieoMiddleware, onlyPrivate } from '../middlewares'
const videoRouter = express.Router()

// Video Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload)
videoRouter.post(routes.upload, onlyPrivate, uploadVieoMiddleware, postUpload)

// Video Edit
videoRouter.get(routes.videoEdit(), onlyPrivate, getVideoEdit)
videoRouter.post(routes.videoEdit(), onlyPrivate, postVideoEdit)

videoRouter.get(routes.videoDelete(), onlyPrivate, videoDelete)

videoRouter.get(routes.videoDetail(), videoDetail)

export default videoRouter
