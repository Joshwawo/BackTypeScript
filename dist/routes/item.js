"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const item_1 = require("../controllers/item");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/posts", item_1.getItems);
router.get("/post/:id", item_1.getItem);
router.post("/posts", item_1.posttItems);
router.put("/post/:id", item_1.updateItems);
router.delete("/post/:id", item_1.deleteItems);