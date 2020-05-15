// Static
const UPLOAD_STATIC = '/uploads'

// Global
const HOME = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SEARCH = '/search'

// Users
const USERS = '/users'
const USER_DETAIL = '/:id'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'

// Videos
const VIDEOS = '/videos'
const UPLOAD = '/upload'
const VIDEO_DETAIL = '/:id'
const VIDEO_EDIT = '/:id/edit'
const VIDEO_DELETE = '/:id/delete'

const routes = {
  uploadStatic: UPLOAD_STATIC,
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/${id}`
    } else {
      return USER_DETAIL
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/${id}`
    } else {
      return VIDEO_DETAIL
    }
  },
  videoEdit: id => {
    if (id) {
      return `/${id}/edit`
    } else {
      return VIDEO_EDIT
    }
  },
  videoDelete: id => {
    if (id) {
      return `/${id}/delete`
    } else {
      return VIDEO_DELETE
    }
  }
}

export default routes
