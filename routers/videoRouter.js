import express from "express";
import routes from "../routes";
const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("videos"));
videoRouter.get(routes.upload, (req, res) => res.send("upload"));
videoRouter.get(routes.video_detail, (req, res) => res.send("video_detail"));
videoRouter.get(routes.video_edit, (req, res) => res.send("video_edit"));
videoRouter.get(routes.video_delete, (req, res) => res.send("video_delete"));

export default videoRouter;