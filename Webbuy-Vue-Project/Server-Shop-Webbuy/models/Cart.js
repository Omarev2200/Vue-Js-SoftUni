const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const cartSchema = new Schema({

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

    quantity: {
        type:Number,
        required:true
    },


});

module.exports = new Model('Cart', cartSchema);