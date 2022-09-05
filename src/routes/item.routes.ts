import { Request, Response, Router } from "express";
import {
  deleteItems,
  getItem,
  getItems,
  posttItems,
  updateItems,
} from "../controllers/item";
import { logMiddleWare } from "../middlewares/log";

const router = Router();

router.get("/", getItems);
router.get("/:id",logMiddleWare ,getItem);
router.post("/post", posttItems);
router.put("/:id", updateItems);
router.delete("/:id", deleteItems);

export { router };
