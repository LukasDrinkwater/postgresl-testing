const asnycHandler = require("express-async-handler");

exports.default = asnycHandler(async (req, res, next) => {
  console.log("usernames will be logged here - wip");
});

exports.new_form = asnycHandler(async (req, res, next) => {
  // to display a HTML form to the user with
  // one username input text field. It will submit to the next route.
});

exports.new_post = asnycHandler(async (req, res, next) => {
  console.log("username to be saved: ", req.body.username);
});

exports.xxx = asnycHandler(async (req, res, next) => {
  xxx;
});
