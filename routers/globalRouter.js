import express from "express";
import routes from "../routes";
import { videoHome, videoSearch } from "../controllers/videoController";
import { login, logout, getJoin, postJoin } from "../controllers/userController";

const globalRouter = express.Router();

// join area
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);


globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, videoSearch);

export default globalRouter;
