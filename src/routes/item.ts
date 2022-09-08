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

router.get("/posts", getItems);
router.get("/post/:id", getItem);
router.post("/posts", posttItems);
router.put("/post/:id", updateItems);
router.delete("/post/:id", deleteItems);

export { router };
