import express from 'express' // web server engin
import dotenv from 'dotenv' // env setup
// express middleware
import morgan from 'morgan' // web logger
import helmet from 'helmet' // web secure engine
import bodyParser from 'body-parser' // for parsing body ex> POST, GET
import cookieParser from 'cookie-parser' // for parsing cookie
import path from 'path' // for dir path
import mongoose from 'mongoose' // for mongo session store
import session from 'express-session' // for sessoin
import MongoStore from 'connect-mongo' // for sessoin store
import passport from 'passport' // for user Authentication
import './passport' // SetUp Passport
// router module
import { localMiddleware } from './middlewares'
import routes from './routes'
import userRouter from './routers/userRouter'
import videoRouter from './routers/videoRouter'
import globaloRouter from './routers/globalRouter'
import apiRouter from './routers/apiRouter'
// express const app
dotenv.config()
const app = express()
const CokieStore = MongoStore(session)

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
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection })
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
app.use(routes.api, apiRouter)

export default app
