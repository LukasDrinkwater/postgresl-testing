const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

// GET default
router.get("/", controller.default);

router.get("/users", controller.get_users);

// GET add new user form
router.get("/new", controller.new_form);

router.post("/new", controller.new_post);

// DELETE specific user
router.post("/delete-user", controller.delete_user);

module.exports = router;
