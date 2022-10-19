import { Request, Response } from "express";
import { deleteImage } from "../libs/cloudinary";
import BlogModel from "../models/blog.model";
import {
  insertBlog,
  FetchBlogs,
  fetchBlogId,
  fetchBlogDelete,
  fetchUpdateblog,
} from "../services/blog.service";
import { handleHttp } from "../utils/error.handle";
import { Blog } from "../interfaces/blog/blog.interfaces";

const postBlogs = async ({ body, files }: Request, res: Response) => {
  try {
    const respuestaBlog = await insertBlog(body, files);
    res.send(respuestaBlog);
  } catch (error) {
    handleHttp(res, "Error_Post_Blog", error);
  }
};

const getBlogs = async (req: Request, res: Response) => {
  // res.send({ message: "Desde aki" });
  try {
    const respuesta = await FetchBlogs();
    if (!respuesta || null) {
      return res.status(404).json({
        status: 404,
        message: "No existe un post con ese id",
      });
    }
    res.send(respuesta);
  } catch (error) {
    handleHttp(res, "Error_Get_Blog", error);
  }
};

const getBlog = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const respustablog = await fetchBlogId(id);
    if (respustablog === null) {
      return res.status(404).json({
        status: 404,
        message: "No existe un post con ese id",
      });
    }
    // console.log(blogById)
    // console.log(respustablog);

    res.send(respustablog);
  } catch (error) {
    // console.log(error);
    handleHttp(res, "Error_Get_Blog");
  }
};

const deleteBlog = async (req: Request, res: Response) => {
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
    const respuestaDelete = await fetchBlogDelete(id);

    if (!respuestaDelete) {
      return res.status(404).json({
        status: 404,
        message: "No existe un post con ese id",
      });
    }

    // console.log(respuestaDelete);
    res.send({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async ({ params, body, files }: Request, res: Response) => {
  try {
    const { id } = params;

    // const respuestaUpdate = await fetchUpdateblog(id,files,body)
    const respuestaUpdate = await fetchUpdateblog(id, files, body);

    // console.log(respuestaUpdate);
    res.send(respuestaUpdate);
  } catch (error) {
    console.log(error);
  }
};

export { getBlogs, postBlogs, getBlog, deleteBlog, updateBlog };
