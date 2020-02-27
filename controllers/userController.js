//  Global
export const join = (req, res) =>
  res.render("join", {
    pageTitle: "Join"
  });
export const login = (req, res) =>
  res.render("login", {
    pageTitle: "Login"
  });
export const logout = (req, res) =>
  res.render("logout", {
    pageTitle: "Logout"
  });

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
