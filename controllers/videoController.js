import { videos_db } from "../testDb";
import routes from "../routes";

// Global
export const videoHome = (req, res) => {
  res.render("home", { pageTitle: "VideoHome", videos_db });
};
export const videoSearch = (req, res) => {
  const {
    query: { term: SearchingFor }
  } = req;
  res.render("search", { pageTitle: "VideoSearch", SearchingFor, videos_db });
};

// User
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

// upload area
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, video_desc }
  } = req;
  // ToDo: upload video process
  res.redirect(routes.videos + routes.video_detail(123));
};

export const video_detail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video Detail" });
export const video_edit = (req, res) =>
  res.render("video_edit", { pageTitle: "Video Edit" });
export const video_delete = (req, res) =>
  res.render("video_delete", { pageTitle: "Video Delete" });
