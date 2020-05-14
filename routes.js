// Static
const UPLOAD_STATIC = "/uploads";

// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

const routes = {
  upload_static: UPLOAD_STATIC,
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  user_detail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  edit_profile: EDIT_PROFILE,
  change_password: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  video_detail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  video_edit: id => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return VIDEO_EDIT;
    }
  },
  video_delete: VIDEO_DELETE
};

export default routes;
