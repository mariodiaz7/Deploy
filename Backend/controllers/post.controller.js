const Product = require("../models/product.model");
const Pupilaje = require("../models/pupilaje.model");


const controller = {};

controller.createProduct = async (req, res, next) => {
    try {
        const { title, description, image, productState, price, contact  } = req.body;

        const product = new Product({
            title: title,
            description: description,
            image: image,
            productState: productState,
            price: price,
            contact: contact,
        });

        const productSaved = await product.save();
        if (!productSaved) {
            return res.status(409).json({ error: "Error creating Product" });
        }

        return res.status(201).json(productSaved);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findOneProductById = async (req, res, next) => {
   
}


// Controlador para crear un servicio de pupilaje
controller.createPupilaje = async (req, res, next) => {
    try {
        const { title, description, image, pupilajeState, price, contact, services, mapLink } = req.body;

        const pupilaje = new Pupilaje({
            title: title,
            description: description,
            image: image,
            pupilajeState: pupilajeState,
            price: price,
            contact: contact,
            services:services,
            mapLink:mapLink,
        });

        const pupilajeSaved = await pupilaje.save();
        if (!pupilajeSaved) {
            return res.status(409).json({ error: "Error creating Pupilaje" });
        }

        return res.status(201).json(pupilajeSaved);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find({ hidden: false });

        return res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// Controlador para obtener todos los servicios de pupilaje
controller.findAllPupilajes = async (req, res, next) => {
    try {
        const pupilajes = await Pupilaje.find({ hidden: false });

        return res.status(200).json({ pupilajes });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


// Controlador para obtener un servicio de pupilaje por su ID
controller.finOnePupilajeById = async (req, res, next) => {
   
}

module.exports = controller;

