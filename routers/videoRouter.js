import express from "express";
import routes from "../routes";
import {
  videos,
  video_detail,
  video_edit,
  video_delete,
  getUpload,
  postUpload
} from "../controllers/videoController";
const videoRouter = express.Router();

// upload area
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.video_edit, video_edit);
videoRouter.get(routes.video_delete, video_delete);
videoRouter.get(routes.video_detail(), video_detail);

export default videoRouter;
