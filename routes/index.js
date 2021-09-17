const express = require("express");
const router = express.Router();

const whatsappRouter = require('./whatsapp')

router.get("/", function (req, res, next) {
  res.render("index", { title: "Whatsapp bulk sender app" });
});

router.use("/whatsapp", whatsappRouter);

module.exports = router;
