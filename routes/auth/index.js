const router = require("express").Router();
const auth = require("./auth");

// exercise routes
router.use("/auth", auth);

module.exports = router;
