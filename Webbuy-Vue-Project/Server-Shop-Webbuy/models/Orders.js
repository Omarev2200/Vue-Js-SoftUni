const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Array } = Schema.Types;

const orderSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  
});

module.exports = new Model("Order", orderSchema);
