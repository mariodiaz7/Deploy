const express = require("express");
const router = express.Router();

const {
  createProductValidator,
  createPupilajeValidator,
  idInParamsValidator
} = require("../validators/post.validators");
const validateFields = require("../validators/index.middleware");
const PupilajeController = require("../controllers/post.controller");
const ProductController = require("../controllers/post.controller");

// Rutas para productos
router.get("/products", ProductController.findAllProducts);
router.get("/products/:identifier", idInParamsValidator,validateFields,ProductController.findOneProductById);
router.post(
  "/products",
  createProductValidator,
  validateFields,
  ProductController.createProduct
);

// Rutas para pupilajes
router.get("/pupilajes", PupilajeController.findAllPupilajes);
router.get("/pupilajes/:identifier",idInParamsValidator,validateFields,PupilajeController.finOnePupilajeById);
router.post(
  "/pupilajes",
  createPupilajeValidator,
  validateFields,
  PupilajeController.createPupilaje
);

module.exports = router;