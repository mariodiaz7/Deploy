const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ProductSchema = new Schema({
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
    type: String,
    required: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  productState: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const PupilajeSchema = new Schema({
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
    type: String,
    required: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  pupilajeState: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },

  services: {
    water: {
      type: Boolean,
      default: false,
    },
    electricity: {
      type: Boolean,
      default: false,
    },
    internet: {
      type: Boolean,
      default: false,
    },
  },

  mapLink: {
    type: String,
    required: true,
  },

}, { timestamps: true });

module.exports = {
  Product: Mongoose.model("Product", ProductSchema),
  Pupilaje: Mongoose.model("Pupilaje", PupilajeSchema),
};
