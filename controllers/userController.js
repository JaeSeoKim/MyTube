//  Global
export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");

// User
export const users = (req, res) => res.send("users");
export const user_detail = (req, res) => res.send("user_detail");
export const edit_profile = (req, res) => res.send("edit_profile");
export const change_password = (req, res) => res.send("change_password");