import routes from "../routes";
import Video from "../models/Video";

// Global
export const videoHome = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "VideoHome", videos });
  } catch (error) {
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
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videos + routes.video_detail(newVideo.id));
};

export const video_detail = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const video = await Video.findById(id);
    res.render("video_detail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getVideo_edit = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const video = await Video.findById(id);
    res.render("video_edit", { pageTitle: "Video Edit", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postVideo_edit = async (req, res) => {
  try {
    const {
      params: { id },
      body: { title, description }
    } = req;
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(`${routes.videos}/${routes.video_detail(id)}`);
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const video_delete = (req, res) =>
  res.render("video_delete", { pageTitle: "Video Delete" });
