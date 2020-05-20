import routes from '../routes'
import User from '../models/User'
import passport from 'passport'

// Github
export const githubLogin = passport.authenticate('github')

export const githubLoginCallback = async (_, __, profile, cb) => {
  // TODO: if profile["_json"].email === undefined => 추가 정보를 받아 회원 가입 필요
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile
  try {
    const isExistUser = await User.findOne({ githubId: id })
    if (isExistUser) {
      return cb(null, isExistUser)
    }
    const user = await User.findOne({ email })
    if (user) {
      user.githubId = id
      user.save()
      return cb(null, user)
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    })
    return cb(null, newUser)
  } catch (error) {
    return cb(error)
  }
}

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home)
}

// Facebook
export const facebookLogin = passport.authenticate('facebook')

export const facebookLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, name, email }
  } = profile
  try {
    const isExistUser = await User.findOne({ facebookId: id })
    if (isExistUser) {
      return cb(null, isExistUser)
    }
    const user = await User.findOne({ email })
    if (user) {
      user.facebookId = id
      user.save()
      return cb(null, user)
    }
    const newUser = await User.create({
      email,
      name,
      facebookId: id,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`
    })
    return cb(null, newUser)
  } catch (error) {
    return cb(error)
  }
}

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home)
}

// Join
export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' })
}

export const postJoin = async (req, res, next) => {
  // TODO: Not Working Register(updatePassword) when Socail Login
  const {
    body: { name, email, password, password2 },
    file
  } = req
  if (password !== password2) {
    res.status(400)
    res.render('join', { pageTitle: 'Join' })
  } else {
    try {
      const user = await User({
        name,
        email,
        avatarUrl: file ? file.path : '/static/img/profile.jpg' // Temp Profile Img
      })
      await User.register(user, password)
      next()
    } catch (error) {
      res.status(400)
      res.redirect(routes.home)
    }
  }
}

// Login
export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'Login' })
}

export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home
})

export const logout = (req, res) => {
  req.logout()
  res.redirect(routes.home)
}

// User
export const userDetail = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const user = await User.findById(id).populate('videos')
    res.render('userDetail', { pageTitle: 'User Detail', user })
  } catch (error) {
    res.redirect(routes.home)
  }
}

export const getMyProfile = async (req, res) => {
  const user = await User.findById(req.user.id).populate('videos')
  console.log(user)
  res.render('userDetail', {
    pageTitle: 'User Detail',
    user
  })
}

// Update User Profile
export const getEditProfile = (req, res) => {
  res.render('editProfile', {
    pageTitle: 'Edit Profile'
  })
}

export const postEditProfile = async (req, res) => {
  try {
    const {
      body: { name, email },
      file
    } = req
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl
    })
    res.redirect(routes.myProfile)
  } catch (error) {
    res.redirect(routes.editProfile)
  }
}

export const getChangePassword = (req, res) => {
  res.render('changePassword', {
    pageTitle: 'Change Password'
  })
}

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 }
  } = req
  try {
    if (newPassword !== newPassword1) {
      res.status(400)
      res.redirect(`${routes.users}${routes.changePassword}`)
      return
    }
    await req.user.changePassword(oldPassword, newPassword)
    res.redirect(routes.me)
  } catch (error) {
    res.status(400)
    res.redirect(`${routes.users}${routes.changePassword}`)
  }
}
