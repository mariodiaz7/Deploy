const express = require("express");
const router = express.Router(); //Objeto para configurar ruta

const authController = require("../controllers/auth.controller");
const runValidation = require("../validators/index.middleware");
const { registerValidator } = require("../validators/auth.validator");

router.post("/register",
  registerValidator,
  runValidation,
  authController.register
);


module.exports = router;