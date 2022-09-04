import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {

    res.json({message:'Holas'})
  } catch (error) {
    res.status(500);
    res.send("Error_Get_Items");
  }
};

const posttItems = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
    console.log(body)
  } catch (error) {
    handleHttp(res, "Error_Post_Items");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error_Get_Items");
  }
};

const updateItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error_Update_Items");
  }
};

const deleteItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "Error_Delete_Items");
  }
};

export { getItem, posttItems, getItems, updateItems, deleteItems };
