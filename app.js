import express from "express"; //web server engin
//express middleware 
import morgan from "morgan"; //web logger
import helmet from "helmet"; //web secure engin
import bodyParser from "body-parser"; //for parsing body ex> POST, GET
import cookieParser from "cookie-parser" //for parsing cookie 
//router module
import {
  userRouter
} from "./router";
//express const app
const app = express();

const handleHome = (req, res) => res.send("home index");

const handleProfile = (req, res) => res.send("home profile");

//set midleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(helmet()); //secure
app.use(morgan("dev")); //rog

//router
app.get('/', handleHome);

app.get('/profile', handleProfile);

// user router에게 전달 midleware => userRouter
app.use('/user', userRouter);

export default app;