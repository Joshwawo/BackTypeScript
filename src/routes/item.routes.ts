import { Request, Response, Router } from "express";
import {
  deleteItems,
  getItem,
  getItems,
  posttItems,
  updateItems,
} from "../controllers/item";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/post", posttItems);
router.put("/:id", updateItems);
router.delete("/", deleteItems);

export { router };
