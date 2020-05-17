import express from 'express' // web server engin
import dotenv from 'dotenv' // env setup
// express middleware
import morgan from 'morgan' // web logger
import helmet from 'helmet' // web secure engine
import bodyParser from 'body-parser' // for parsing body ex> POST, GET
import cookieParser from 'cookie-parser' // for parsing cookie
import path from 'path' // for dir path
import session from 'express-session'
import passport from 'passport' // for user Authentication
import './passport' // SetUp Passport
// router module
import { localMiddleware } from './middlewares'
import routes from './routes'
import userRouter from './routers/userRouter'
import videoRouter from './routers/videoRouter'
import globaloRouter from './routers/globalRouter'
// express const app
const app = express()
dotenv.config()

//  set midleware
app.use(helmet()) //  secure
app.set('view engine', 'pug') //  set view engine
app.use(cookieParser())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(morgan('dev')) //  log
// user Authentication
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(localMiddleware) //  for use local Variables

// router
app.use(
  routes.uploadStatic,
  express.static(path.join(__dirname, routes.uploadStatic))
)
app.use(routes.static, express.static(path.join(__dirname, routes.static)))
app.use(routes.home, globaloRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)

export default app
