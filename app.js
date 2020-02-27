import express from "express"; //web server engin
//express middleware
import morgan from "morgan"; //web logger
import helmet from "helmet"; //web secure engine
import bodyParser from "body-parser"; //for parsing body ex> POST, GET
import cookieParser from "cookie-parser"; //for parsing cookie
//router module
import { localMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globaloRouter from "./routers/globalRouter";
//express const app
const app = express();

//set midleware
app.use(helmet()); //secure
app.set("view engine", "pug"); //set view engine
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(morgan("dev")); //rog
app.use(localMiddleware); //for use local Variables

//router
app.use(routes.home, globaloRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
