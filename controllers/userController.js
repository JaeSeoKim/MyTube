import routes from "../routes";

//  Global

// Join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  // ToDo: need Join process
  const { body = { name, email, password, password2 } } = req;
  console.log(body);
  if (body.password != body.password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

// Login 
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = (req, res) => {
  // ToDo: need Login process
  res.redirect(routes.home);
};


export const logout = (req, res) => {
  // ToDo: need logout process
  res.redirect(routes.home);
};

// User
export const users = (req, res) =>
  res.render("users", {
    pageTitle: "users"
  });
export const user_detail = (req, res) =>
  res.render("user_detail", {
    pageTitle: "user_detail"
  });
export const edit_profile = (req, res) =>
  res.render("edit_profile", {
    pageTitle: "edit_profile"
  });
export const change_password = (req, res) =>
  res.render("change_password", {
    pageTitle: "change_password"
  });
