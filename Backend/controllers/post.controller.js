const Product = require("../models/post.model");
const Pupilaje = require("../models/post.model");


const controller = {};

controller.saveProduct = async (req, res, next) => {

    try {
        const { title, description, image, productState, price, contact } = req.body;
        const { identifier } = req.params;


        /*const product = new Product({
            title: title,
            description: description,
            image: image,
            productState: productState,
            price: price,
            contact: contact,
        });*/

        let product = await Product.findByProductId(identifier);

        if (!product) {
            product = new Product();
        }

        product["title"] = title;
        product["description"] = description;
        product["image"] = image;
        product["productState"] = productState;
        product["price"] = price;
        product["contact"] = contact;


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

    try {
        const { identifier } = req.params;

        const post = await Post.findByProductId(identifier);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        return res.status(200).json(post);
    }
    catch (error) {
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

controller.savePupilaje = async (req, res, next) => {


    try {
        const { title, description, image, pupilajeState, price, contact, services, mapLink } = req.body;
            const { identifier } = req.params;


        /*const pupilaje = new Pupilaje({
            title: title,
            description: description,
            image: image,
            pupilajeState: pupilajeState,
            price: price,
            contact: contact,
            services: services,
            mapLink: mapLink,
        });*/

        let pupilaje = await Pupilaje.findByProductId(identifier);

        if (!pupilaje) {
            pupilaje = new Pupilaje();
        }

        pupilaje["title"] = title;
        pupilaje["description"] = description;
        pupilaje["image"] = image;
        pupilaje["productState"] = productState;
        pupilaje["price"] = price;
        pupilaje["contact"] = contact;
        pupilaje["services"] = services;
        pupilaje["mapLink"] = mapLink;

        const pupilajeSaved = await pupilaje.save();
        if (!pupilajeSaved) {
            return res.status(409).json({ error: "Error creating Product" });
        }

        return res.status(201).json(pupilajeSaved);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

    
}

controller.findAllPupilajes = async (req, res, next) => {
    try {
        const pupilajes = await Pupilaje.find({ hidden: false });

        return res.status(200).json({ pupilajes });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.finOnePupilajeById = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const post = await Post.findByPupilajeId(identifier);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        return res.status(200).json(post);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }

}

controller.deleteProductById = async (req, res, next) => {

    try {
        const { identifier } = req.params;

        const post = await Product.findOneProductAndDelete({ identifier });

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        return res.status(200).json({ message: "Post deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }
}

controller.deletePupilajeById = async (req, res, next) => {

    try {
        const { identifier } = req.params;

        const post = await Product.findOnePupilajeAndDelete({ identifier });

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        return res.status(200).json({ message: "Post deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }
}

module.exports = controller;
