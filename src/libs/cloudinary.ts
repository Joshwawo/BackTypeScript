import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_KEY_SECRET,
});

export const uploadImage = async (filepath: any) => {
  return await cloudinary.uploader.upload(filepath, {
    folder: "posts",
  });
};

export const deleteImage = async (id: string) => {
  return await cloudinary.uploader.destroy(id);
};
