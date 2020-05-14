import routes from "../routes";
import Video from "../models/Video";

// Global
export const videoHome = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    res.render("home", { pageTitle: "VideoHome", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "VideoHome", videos: [] });
  }
};
export const videoSearch = (req, res) => {
  const {
    query: { term: SearchingFor }
  } = req;
  res.render("search", { pageTitle: "VideoSearch", SearchingFor, videos });
};

// User
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

// upload area
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    body: { title, descrtion },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    descrtion
  });
  console.log(newVideo);
  res.redirect(routes.videos + routes.video_detail(newVideo.id));
};

export const video_detail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video Detail" });
export const video_edit = (req, res) =>
  res.render("video_edit", { pageTitle: "Video Edit" });
export const video_delete = (req, res) =>
  res.render("video_delete", { pageTitle: "Video Delete" });
