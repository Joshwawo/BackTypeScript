"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAndUpdate = exports.deleteImage = exports.uploadImage = void 0;
const cloudinary_1 = require("cloudinary");
require("dotenv/config");
const fs_extra_1 = __importDefault(require("fs-extra"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET,
});
const uploadImage = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.upload(filepath, {
        folder: "posts",
        format: "webp",
        // transformation: [
        //   { width: 500, height: 500, crop: "limit" },
        //   // {
        //   //   dpr: "auto",
        //   //   responsive: true,
        //   //   width: "auto",
        //   //   crop: "scale",
        //   //   angle: 20,
        //   // },
        //   // { effect: "art:hokusai", border: "3px_solid_rgb:00399b", radius: 20 },
        // ],
    });
});
exports.uploadImage = uploadImage;
const deleteImage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.destroy(id);
});
exports.deleteImage = deleteImage;
const deleteAndUpdate = (public_id, filePath) => __awaiter(void 0, void 0, void 0, function* () {
    yield cloudinary_1.v2.uploader.destroy(public_id);
    const result = yield (0, exports.uploadImage)(filePath);
    yield fs_extra_1.default.remove(filePath);
    return result;
});
exports.deleteAndUpdate = deleteAndUpdate;
