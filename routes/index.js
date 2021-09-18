const express = require("express");
const router = express.Router();

router.use("/", require("./home"));

router.use("/login", require("../controllers/loginController")); // to je iz form action u html

router.use("/admin", require("./admin"));
router.use("/operater", require("./operater"));
router.use("/savetnik", require("./savetnik"));
router.use("/logout", require("./logout"));
module.exports = router;
