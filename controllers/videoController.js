// Global
export const videoHome = (req, res) =>
  res.render("home", { pageTitle: "VideoHome" });
export const videoSearch = (req, res) => {
  const {
    query: { term : SearchingFor }
  } = req;
  res.render("search", { pageTitle: "VideoSearch" , SearchingFor });
};

// User
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const video_detail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video Detail" });
export const video_edit = (req, res) =>
  res.render("video_edit", { pageTitle: "Video Edit" });
export const video_delete = (req, res) =>
  res.render("video_delete", { pageTitle: "Video Delete" });
