const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      //URL de la imagen
      type: String,
      required: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },  { timestamps: true });

module.exports = Mongoose.model("Post", PostSchema);
