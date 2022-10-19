"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    description: {
        type: String,
        default: 'am description...'
    }
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
