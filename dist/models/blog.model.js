"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: "No title",
    },
    descripcion: {
        type: String,
    },
    tech: {
        type: String,
    },
    image: {
        url: String,
        public_id: String,
    },
    github: {
        type: String,
    },
    proyectUrl: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const BlogModel = (0, mongoose_1.model)("Blog", BlogSchema);
exports.default = BlogModel;
