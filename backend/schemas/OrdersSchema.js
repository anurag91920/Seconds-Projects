const { Schema } = require("mongoose");

const OredersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = { OredersSchema };