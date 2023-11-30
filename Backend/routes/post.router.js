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
router.get("/", ProductController.findAllProducts);
router.get("//:identifier", idInParamsValidator,validateFields,ProductController.findOneProductById);
router.post(  ["/","/:identifier"],
  createProductValidator,
  idInParamsValidator,
  validateFields,
  ProductController.saveProduct
);
//eliminar
router.delete(
  "/:identifier",
  idInParamsValidator,
  validateFields,
  ProductController.deleteProductById,
);


// Rutas para pupilajes
router.get("/", PupilajeController.findAllPupilajes);

router.get("/:identifier",
idInParamsValidator,
validateFields,
PupilajeController.finOnePupilajeById
);
router.post(
  ["/","/:identifier"],
  createPupilajeValidator,
  idInParamsValidator,
  validateFields,
  PupilajeController.savePupilaje
);
//eliminar
router.delete(
  "/:identifier",
  idInParamsValidator,
  validateFields,
  PupilajeController.deletePupilajeById,
);


module.exports = router;