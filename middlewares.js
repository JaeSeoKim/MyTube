import app from "./app";
import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  app.locals.sitename = "WeTube";
  app.locals.routes = routes;
  app.locals.user = {
    isAuthenticated: true,
    id: 12
  };
  req.next();
};
