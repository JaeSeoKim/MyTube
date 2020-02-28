import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  video_detail,
  video_edit,
  video_delete
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.video_edit, video_edit);
videoRouter.get(routes.video_delete, video_delete);
videoRouter.get(routes.video_detail, video_detail);

export default videoRouter;
