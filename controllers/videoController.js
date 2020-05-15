import routes from '../routes'
import Video from '../models/Video'

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
    description
  })
  res.redirect(routes.videos + routes.videoDetail(newVideo.id))
}

export const videoDetail = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const video = await Video.findById(id)
    console.log(video)
    res.render('videoDetail', { pageTitle: video.title, video })
  } catch (error) {
    res.redirect(routes.home)
  }
}
export const getVideoEdit = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const video = await Video.findById(id)
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
    await Video.findOneAndUpdate({ _id: id }, { title, description })
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
    await Video.findOneAndDelete({ _id: id })
    res.redirect(routes.home)
  } catch (error) {
    res.redirect(routes.home)
  }
}
