// Global
export const videoHome = (req, res) => res.send("home");
export const videoSearch = (req, res) => res.send("search");

// User
export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.send("upload");
export const video_detail = (req, res) => res.send("video_detail");
export const video_edit = (req, res) => res.send("video_edit");
export const video_delete = (req, res) => res.send("video_delete");