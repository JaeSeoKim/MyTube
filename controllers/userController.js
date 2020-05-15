import routes from '../routes'

//  Global

// Join
export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' })
}

export const postJoin = (req, res) => {
  // ToDo: need Join process
  const {
    // eslint-disable-next-line no-unused-vars
    body: { name, email, password, password2 }
  } = req
  if (password !== password2) {
    res.status(400)
    res.render('join', { pageTitle: 'Join' })
  } else {
    res.redirect(routes.home)
  }
}

// Login
export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'Login' })
}

export const postLogin = (req, res) => {
  // ToDo: need Login process
  res.redirect(routes.home)
}

export const logout = (req, res) => {
  // ToDo: need logout process
  res.redirect(routes.home)
}

// User
export const users = (req, res) =>
  res.render('users', {
    pageTitle: 'users'
  })
export const userDetail = (req, res) =>
  res.render('userDetail', {
    pageTitle: 'User Detail'
  })
export const editProfile = (req, res) =>
  res.render('editProfile', {
    pageTitle: 'Edit Profile'
  })
export const changePassword = (req, res) =>
  res.render('changePassword', {
    pageTitle: 'Change Password'
  })
