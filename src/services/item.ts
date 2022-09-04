import ItemModel from "../models/items";
import { Car } from "../interfaces/car.interfaces";

const insertItem = async (item: Car) => {
  const RespuestaInsert = await ItemModel.create(item);

  return RespuestaInsert;
};

const getItemsCars = async () => {
  const respuestaItems = await ItemModel.find({});
  return respuestaItems;
};

const getById = async (id:string)=>{
  const respuestaItem = await ItemModel.findOne({_id:id})
  return respuestaItem

}

export { insertItem, getItemsCars,getById };
