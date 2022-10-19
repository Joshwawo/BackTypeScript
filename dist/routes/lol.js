"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const lolCtrl_1 = require("../controllers/lolCtrl");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/champs", lolCtrl_1.getChamps);
router.get("/summoner", lolCtrl_1.getSummoner);
