import express from "express";
import routes from "../routes";
import { videoHome, videoSearch } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin
} from "../controllers/userController";

const globalRouter = express.Router();

// join area
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

// login area
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, videoSearch);

export default globalRouter;
