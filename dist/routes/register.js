"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userControlller_1 = require("../controllers/userControlller");
const checkAuth_1 = __importDefault(require("../middlewares/checkAuth"));
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", userControlller_1.register);
//Estas si importan
router.post("/", userControlller_1.registerNewUser);
router.post("/login", userControlller_1.authUserR);
router.get("/confirm/:token", userControlller_1.confirmAccountC);
router.post("/forgot-password", userControlller_1.forgotPassword);
router.route("/forgot-password/:token").get(userControlller_1.comparePassword).post(userControlller_1.newPassword);
//Auth routes
router.get("/perfil", checkAuth_1.default, userControlller_1.userPerfil);
