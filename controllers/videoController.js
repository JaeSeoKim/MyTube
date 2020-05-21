import routes from '../routes'
import Video from '../models/Video'
import Comment from '../models/Comment'

// Global
export const videoHome = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 })
    res.render('home', { pageTitle: 'VideoHome', videos })
  } catch (error) {
    res.render('home', { pageTitle: 'VideoHome', videos: [] })
  }
}

export const videoSearch = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req
  let videos = []
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: 'i' }
    })
  } catch (error) {}
  res.render('videoSearch', { pageTitle: 'VideoSearch', searchingBy, videos })
}

// User
export const videos = (req, res) =>
  res.render('videos', { pageTitle: 'Videos' })

// upload area
export const getUpload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload' })
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator: req.user.id
  })
  req.user.videos.push(newVideo.id)
  req.user.save()
  res.redirect(routes.videos + routes.videoDetail(newVideo.id))
}

export const videoDetail = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const video = await Video.findById(id)
      .populate('creator')
      .populate({ path: 'comments', populate: [{ path: 'creator' }] })
    res.render('videoDetail', { pageTitle: video.title, video })
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}
export const getVideoEdit = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const video = await Video.findById(id)
    if (String(video.creator) !== String(req.user.id)) {
      throw Error()
    }
    res.render('videoEdit', { pageTitle: video.title, video })
  } catch (error) {
    res.redirect(routes.home)
  }
}

export const postVideoEdit = async (req, res) => {
  try {
    const {
      params: { id },
      body: { title, description }
    } = req
    const video = await Video.findById(id)
    if (String(video.creator) !== String(req.user.id)) {
      throw Error()
    }
    await video.update({ title, description })
    await video.save()
    res.redirect(`${routes.videos}${routes.videoDetail(id)}`)
  } catch (error) {
    res.redirect(routes.home)
  }
}

export const videoDelete = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const video = await Video.findById(id)
    if (String(video.creator) !== String(req.user.id)) {
      throw Error()
    }
    await video.remove()
    res.redirect(routes.home)
  } catch (error) {
    res.redirect(routes.home)
  }
}

// Register Video View
export const postRegisterView = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const video = await Video.findById(id)
    video.views += 1
    video.save()
    res.status(200)
  } catch (error) {
    res.status(400)
  } finally {
    res.end()
  }
}

// Add Comment
export const postAddComment = async (req, res) => {
  try {
    const {
      params: { id },
      body: { comment },
      user
    } = req
    const video = await Video.findById(id)
    const newComment = await Comment.create({
      text: comment,
      creator: user.id
    })
    video.comments.push(newComment.id)
    video.save()
  } catch (error) {
    res.status(400)
  } finally {
    res.end()
  }
}

export const deleteComment = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const comment = await Comment.findById(id)
    if (String(req.user.id) !== String(comment.creator)) {
      throw Error()
    }
    comment.remove()
  } catch (error) {
    console.log(error)
    res.status(400)
  } finally {
    res.end()
  }
}
