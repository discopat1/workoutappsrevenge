const router = require("express").Router();
const exerciseRoutes = require("./exercises");

// exercise routes
router.use("/exercises", exerciseRoutes);

module.exports = router;
