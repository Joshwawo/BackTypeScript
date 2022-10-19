"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const order_1 = require("../controllers/order");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", session_1.checkJwt, order_1.getItems);
