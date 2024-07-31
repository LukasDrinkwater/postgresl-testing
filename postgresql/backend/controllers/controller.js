const asnycHandler = require("express-async-handler");
const db = require("../db/queries");
const pool = require("../db/pool");

exports.default = asnycHandler(async (req, res, next) => {
  console.log("usernames will be logged here - wip");
  const usernames = await db.getAllUsernames();
  console.log("Usernames", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
});

exports.get_users = asnycHandler(async (req, res, next) => {
  // const usernames = await pool.query("SELECT id, username FROM usernames");
  const { rows } = await pool.query("SELECT id, username FROM usernames");
  // console.log(usernames);
  res.send(rows);
});

exports.new_form = asnycHandler(async (req, res, next) => {
  // to display a HTML form to the user with
  // one username input text field. It will submit to the next route.
});

exports.new_post = asnycHandler(async (req, res, next) => {
  console.log("username to be saved: ", req.body.username);
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
});

exports.delete_user = asnycHandler(async (req, res, next) => {
  const username = req.body.username;
  console.log(req.body);
  //  to prevent SQL injection ($1) is used. It is replaced in the quer
  // with each coresponding item in the array
  // await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  await pool.query("DELETE FROM usernames WHERE username = $1", [username]);
  res.status(200).send("Username removed");
});
