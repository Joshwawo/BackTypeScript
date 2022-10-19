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
exports.fetchUpdateblog = exports.fetchBlogDelete = exports.fetchBlogId = exports.FetchBlogs = exports.insertBlog = void 0;
const blog_model_1 = __importDefault(require("../models/blog.model"));
const cloudinary_1 = require("../libs/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
//!POST
const insertBlog = (blog, files) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(files);
    try {
        const { title, descripcion, tech, github, proyectUrl } = blog;
        let image;
        if (files === null || files === void 0 ? void 0 : files.image) {
            const result = yield (0, cloudinary_1.uploadImage)(files.image.tempFilePath);
            console.log(result);
            yield fs_extra_1.default.remove(files.image.tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id,
            };
        }
        const newBlog = new blog_model_1.default({
            title,
            descripcion,
            tech,
            image,
            github,
            proyectUrl,
        });
        const respuestaBlog = yield newBlog.save();
        return respuestaBlog;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.insertBlog = insertBlog;
//!GET
const FetchBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuestaBlogs = yield blog_model_1.default.find({});
        return respuestaBlogs;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.FetchBlogs = FetchBlogs;
//!GET BY ID
const fetchBlogId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuestBlog = yield blog_model_1.default.findById(id);
        return respuestBlog;
    }
    catch (error) {
        console.log(error);
    }
});
exports.fetchBlogId = fetchBlogId;
//!DELETE
const fetchBlogDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // const postDelete = await BlogModel.findOneAndDelete({_id:req.params.id})
        const postDelete = yield blog_model_1.default.findOneAndDelete({ _id: id });
        if (!postDelete)
            return false;
        if ((_a = postDelete === null || postDelete === void 0 ? void 0 : postDelete.image) === null || _a === void 0 ? void 0 : _a.public_id) {
            yield (0, cloudinary_1.deleteImage)(postDelete.image.public_id);
        }
        return postDelete;
    }
    catch (error) { }
});
exports.fetchBlogDelete = fetchBlogDelete;
//!PUT
const fetchUpdateblog = (id, files, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let blog = yield blog_model_1.default.findById(id);
        if ((files === null || files === void 0 ? void 0 : files.image) === undefined) {
            const data = {
                title: body.title,
                descripcion: body.descripcion,
                tech: body.tech,
                github: body.github,
                proyectUrl: body.proyectUrl,
            };
            blog = yield blog_model_1.default.findByIdAndUpdate(id, data, { new: true });
            return blog;
        }
        else if (files === null || files === void 0 ? void 0 : files.image) {
            //   await cloudinary.uploader.destroy(String(blog?.image.public_id));
            //   const result = await uploadImage(files.image.tempFilePath);
            //   await fs.remove(files.image.tempFilePath);
            // const  result= deleteAndUpdate(String(blog?.image.public_id),files.image.tempFilePath)
            const result = yield (0, cloudinary_1.deleteAndUpdate)(String(blog === null || blog === void 0 ? void 0 : blog.image.public_id), files.image.tempFilePath);
            const data = {
                title: body.title,
                descripcion: body.descripcion,
                tech: body.tech,
                image: {
                    url: result === null || result === void 0 ? void 0 : result.secure_url,
                    public_id: result === null || result === void 0 ? void 0 : result.public_id,
                },
                github: body.github,
                proyectUrl: body.proyectUrl,
            };
            blog = yield blog_model_1.default.findByIdAndUpdate(id, data, { new: true });
            return blog;
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.fetchUpdateblog = fetchUpdateblog;
