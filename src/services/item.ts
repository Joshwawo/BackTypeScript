import ItemModel from "../models/items";
import { Car } from "../interfaces/car.interfaces";

const insertItem = async (item: Car) => {
  const RespuestaInsert = await ItemModel.create(item);

  return RespuestaInsert;
};

export { insertItem };
