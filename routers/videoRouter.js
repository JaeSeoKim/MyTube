import express from "express";
import routes from "../routes";
import {
  videos,
  video_detail,
  getVideo_edit,
  postVideo_edit,
  video_delete,
  getUpload,
  postUpload
} from "../controllers/videoController";
import { uploadVieoMiddleware } from "../middlewares";
const videoRouter = express.Router();

// Video
videoRouter.get("/", videos);

// Video Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVieoMiddleware, postUpload);

// Video Edit
videoRouter.get(routes.video_edit(), getVideo_edit);
videoRouter.post(routes.video_edit(), postVideo_edit);

videoRouter.get(routes.video_delete(), video_delete);

videoRouter.get(routes.video_detail(), video_detail);

export default videoRouter;
