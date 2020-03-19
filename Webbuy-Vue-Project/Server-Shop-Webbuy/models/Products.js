const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const productSchema = new Schema({

    brand: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imigUrl: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User"
    },

});

module.exports = new Model('Products', productSchema);