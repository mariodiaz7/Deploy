
const validators = () => { };

const { body, param } = require("express-validator");

validators.createPupilajeValidator = [
    param("identifier")
        .optional()
        .notEmpty()
        .withMessage("Identifier is required")
        .isMongoId()
        .withMessage("Identifier must be a Mongo ID"),
    body("title").notEmpty().withMessage("Title is required"),
    body("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ max: 280 })
        .withMessage("Description maximum length is 280 characters"),
    body("image")
        .notEmpty()
        .withMessage("Image is required")
        .isBase64()
        .withMessage("Image must be a base64 encoded string"),
    body("pupilajeState").notEmpty().withMessage("Pupilaje state is required"),
    body("price").notEmpty().withMessage("Price is required").isNumeric().withMessage("Price must be a number"),
    body("contact")
        .notEmpty()
        .isURL()
        .withMessage("Contact is required"),
    body("services.water").isBoolean().withMessage("Water service must be a boolean"),
    body("services.electricity").isBoolean().withMessage("Electricity service must be a boolean"),
    body("services.internet").isBoolean().withMessage("Internet service must be a boolean"),
    body("mapLink")
        .notEmpty()
        .isURL()
        .withMessage("mapLink is required"),
];

validators.createProductValidator = [
    param("identifier")
        .optional()
        .notEmpty()
        .withMessage("Identifier is required")
        .isMongoId()
        .withMessage("Identifier must be a Mongo ID"),
    body("title").notEmpty().withMessage("Title is required"),
    body("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ max: 280 })
        .withMessage("Description maximum length is 280 characters"),
    body("image")
        .notEmpty()
        .withMessage("Image is required")
        .isURL()
        .withMessage("Image must be a URL"),
    body("productState").notEmpty().withMessage("Product state is required"),
    body("price").notEmpty().withMessage("Price is required").isNumeric().withMessage("Price must be a number"),
    body("contact")
        .notEmpty()
        .isURL()
        .withMessage("Contact is required")
];

validators.idInParamsValidator = [
    param("identifier")
        .notEmpty()
        .withMessage("Identifier is required")
        .isMongoId()
        .withMessage("Identifier must be a Mongo ID"),
];


module.exports = validators;