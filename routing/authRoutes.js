const expres = require("express");
const { Login, verifyLogin } = require("../controller/authController");
const { secure } = require("../middleware/secure");

const router = expres.Router();

router.get("/verify", secure, verifyLogin);
router.post("/login", Login);
module.exports = router;
