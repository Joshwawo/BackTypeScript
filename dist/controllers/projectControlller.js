"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectById = exports.getProjectByID = exports.newProject = exports.getProject = void 0;
const newProject_1 = __importDefault(require("../models/newProject"));
//TODO:move all this to services
const getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const proyects = await newProjectModel.find({creator: req.user._id}).sort({createdAt: -1});
    const proyects = yield newProject_1.default
        .find()
        .where("creator")
        .equals(req.user);
    res.json(proyects);
});
exports.getProject = getProject;
const newProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = new newProject_1.default(req.body);
    const { _id } = req.user;
    project.creator = _id;
    try {
        const projectSaved = yield project.save();
        res.json(projectSaved);
    }
    catch (error) {
        console.log(error);
    }
});
exports.newProject = newProject;
//TODO: GET PROJECT BY ID
const getProjectByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const searchProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const search = yield newProject_1.default.findById(id);
            if (!search)
                return;
            return search;
        }
        catch (error) {
            return null;
        }
    });
    const project = yield searchProject(id);
    if (!project) {
        const error = new Error("Project not found");
        return res.status(404).json({ message: error.message });
    }
    if (String(project.creator) !== String(req.user._id)) {
        const error = new Error("hey you cant visit is site, forbidden");
        return res.status(403).json({ message: error.message });
    }
    res.json(project);
});
exports.getProjectByID = getProjectByID;
const updateProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Project updated" });
});
exports.updateProjectById = updateProjectById;
