const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
