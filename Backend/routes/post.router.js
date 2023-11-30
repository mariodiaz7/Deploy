const express = require("express");
const router = express.Router();

const postController = require("../controllers/post.controller");

//// /api/post/...

router.get("/", postController.findAllProducts);
router.get("/:identifier", postController.findOneProductById)
router.get("/", postController.findAllPupilajes);
router.get("/:identifier", postController.finOnePupilajeById);
router.post("/", postController.createProduct);
router.post("/", postController.createPupilaje);

module.exports = router;
