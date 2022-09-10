import BlogModel from "../models/blog.model";
import { Blog } from "../interfaces/blog/blog.interfaces";
import { deleteImage, uploadImage } from "../libs/cloudinary";
import fs from "fs-extra";

const insertBlog = async (blog: Blog, files: any): Promise<unknown> => {
  console.log(files);
  try {
    const { title, descripcion, tech } = blog;
    let image;

    if (files?.image) {
      const result = await uploadImage(files.image.tempFilePath);
      await fs.remove(files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const newBlog = new BlogModel({
      title,
      descripcion,
      tech,
      image,
    });

    const respuestaBlog = await newBlog.save();
    return respuestaBlog;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const FetchBlogs = async (): Promise<unknown> => {
  try {
    const respuestaBlogs = await BlogModel.find({});
    return respuestaBlogs;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const fetchBlogId = async (id: string) => {
  try {
    const respuestBlog = await BlogModel.findById(id);
    return respuestBlog;
  } catch (error) {
    console.log(error);
  }
};

const fetchBlogDelete =async (id:string) => {
    try {
    // const postDelete = await BlogModel.findOneAndDelete({_id:req.params.id})

        const respuestBlog = await BlogModel.findByIdAndDelete({_id:id});

        if(respuestBlog?.image?.public_id){
            await deleteImage(respuestBlog?.image?.public_id)
        }

        return respuestBlog;






        
        
    } catch (error) {
        
    }
    
}

export { insertBlog, FetchBlogs, fetchBlogId };
