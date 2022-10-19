"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: false,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    deliveryDate: {
        type: Date,
        default: Date.now(),
        require: false,
    },
    client: {
        type: String,
        trim: true,
        required: false,
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "NewUser",
    },
    partners: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "NewUser",
        },
    ],
}, {
    timestamps: true,
});
const newProjectSchema = (0, mongoose_1.model)("newProject", ProjectSchema);
exports.default = newProjectSchema;
