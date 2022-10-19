"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    color: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    gas: {
        type: String,
        enum: ["gasoline", "electric"],
    },
    price: {
        type: Number,
    },
    year: {
        type: Number,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ItemModel = (0, mongoose_1.model)("items", ItemSchema);
exports.default = ItemModel;
