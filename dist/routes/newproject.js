"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const projectControlller_1 = require("../controllers/projectControlller");
const checkAuth_1 = __importDefault(require("../middlewares/checkAuth"));
const router = (0, express_1.Router)();
exports.router = router;
//ProjectRoute
//TODO: pls add the auth middleware 
router.route("/").get(checkAuth_1.default, projectControlller_1.getProject).post(checkAuth_1.default, projectControlller_1.newProject);
router.route("/:id").get(checkAuth_1.default, projectControlller_1.getProjectByID).put(checkAuth_1.default, projectControlller_1.updateProjectById);
