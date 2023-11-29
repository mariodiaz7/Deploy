const Post = require("../models/post.model");

const controller = {};

controller.create = async (req, res, next) => {
    try {
        const { title, description, image } = req.body;

        const post = new Post({
            title: title,
            description: description,
            image: image
        });

 const postSaved = await post.save();
        if (!postSaved) {
        return res.status(409).json({error:"Error creating Post"});
        }

        return res.status(201).json(postSaved);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

controller.findAll = async (req, res, next) => {
    try {
      const posts = await Post.find({ hidden: false })
 
      /*
{
    post:[{},{},{}]
}
*/
         return res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
  }

  controller.findOneById = async (req, res, next) => {
   
  }

module.exports = controller;
