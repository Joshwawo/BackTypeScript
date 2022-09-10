import { Request, Response } from "express";
import { deleteImage } from "../libs/cloudinary";
import BlogModel from "../models/blog.model";
import { insertBlog, FetchBlogs, fetchBlogId } from "../services/blog.service";
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
    res.send(respuesta);
  } catch (error) {
    handleHttp(res, "Error_Get_Blog");
  }
};

const getBlog = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const respustablog = await fetchBlogId(id);
    // console.log(blogById)

    res.send(respustablog);
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const postDelete = await BlogModel.findOneAndDelete({ _id: req.params.id });
    if (postDelete?.image?.public_id) {
      await deleteImage(postDelete.image.public_id);
    }
    res.send({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
  }
};

// try {
//   const {id} = req.params;
//   const respuesta = await deleteBlog(id);
//   res.send(respuesta)
// } catch (error) {
//   console.log(error)
// }

// }

export { getBlogs, postBlogs, getBlog, deleteBlog };
