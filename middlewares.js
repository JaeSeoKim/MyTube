import app from "./app";
import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  app.locals.sitename = "WeTube";
  app.locals.routes = routes;
  req.next();
};
