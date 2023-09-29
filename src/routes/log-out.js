const { removeSession } = require("../model/session");


function post(req, res) {
  
  removeSession(req.session.id);
  res.clearCookie("sid");
  res.redirect("/");

  /**
   *
   * [1] Get the session ID from the cookie
   * [2] Remove that session from the DB
   * [3] Remove the session cookie
   * [4] Redirect back home
   */
  res.status(500).send("");
}

module.exports = { post };
