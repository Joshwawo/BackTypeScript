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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.deleteBlog = exports.getBlog = exports.postBlogs = exports.getBlogs = void 0;
const blog_service_1 = require("../services/blog.service");
const error_handle_1 = require("../utils/error.handle");
const postBlogs = ({ body, files }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuestaBlog = yield (0, blog_service_1.insertBlog)(body, files);
        res.send(respuestaBlog);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Error_Post_Blog", error);
    }
});
exports.postBlogs = postBlogs;
const getBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send({ message: "Desde aki" });
    try {
        const respuesta = yield (0, blog_service_1.FetchBlogs)();
        if (!respuesta || null) {
            return res.status(404).json({
                status: 404,
                message: "No existe un post con ese id",
            });
        }
        res.send(respuesta);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Error_Get_Blog", error);
    }
});
exports.getBlogs = getBlogs;
const getBlog = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const respustablog = yield (0, blog_service_1.fetchBlogId)(id);
        if (respustablog === null) {
            return res.status(404).json({
                status: 404,
                message: "No existe un post con ese id",
            });
        }
        // console.log(blogById)
        // console.log(respustablog);
        res.send(respustablog);
    }
    catch (error) {
        // console.log(error);
        (0, error_handle_1.handleHttp)(res, "Error_Get_Blog");
    }
});
exports.getBlog = getBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //   const postDelete = await BlogModel.findOneAndDelete({ _id: req.params.id });
    //   if (postDelete?.image?.public_id) {
    //     await deleteImage(postDelete.image.public_id);
    //   }
    //   res.send({ message: "Post deleted" });
    // } catch (error) {
    //   console.log(error);
    // }
    const { id } = req.params;
    try {
        const respuestaDelete = yield (0, blog_service_1.fetchBlogDelete)(id);
        if (!respuestaDelete) {
            return res.status(404).json({
                status: 404,
                message: "No existe un post con ese id",
            });
        }
        // console.log(respuestaDelete);
        res.send({ message: "Post deleted" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteBlog = deleteBlog;
const updateBlog = ({ params, body, files }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        // const respuestaUpdate = await fetchUpdateblog(id,files,body)
        const respuestaUpdate = yield (0, blog_service_1.fetchUpdateblog)(id, files, body);
        // console.log(respuestaUpdate);
        res.send(respuestaUpdate);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateBlog = updateBlog;
