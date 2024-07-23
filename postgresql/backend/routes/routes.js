const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

// GET default
router.get("/", controller.default);

// GET add new user form
router.get("/new", controller.new_form);

router.post("/new", controller.new_post);

module.exports = router;
