import { Response, Request } from "express";
import newProjectModel from "../models/newProject";
import {
  RequestNvo,
  ReqPorject,
  _id,
  id,
} from "../interfaces/newAuth.interfaces";

//TODO:move all this to services

const getProject = async (req: RequestNvo, res: Response):Promise<void> => {
  // const proyects = await newProjectModel.find({creator: req.user._id}).sort({createdAt: -1});
  const proyects = await newProjectModel
    .find()
    .where("creator")
    .equals(req.user);
  res.json(proyects);
};

const newProject = async (req: RequestNvo, res: Response) => {
  const project = new newProjectModel(req.body);
  const { _id } = req.user;
  project.creator = _id;

  try {
    const projectSaved = await project.save();
    res.json(projectSaved);
  } catch (error) {
    console.log(error);
  }
};

//TODO: GET PROJECT BY ID

const getProjectByID = async (req: RequestNvo, res: Response):Promise<object | undefined> => {
  const { id } = req.params;

  const searchProject = async (id: string) => {
    try {
      const search = await newProjectModel.findById(id);
      if (!search) return;

      return search;
    } catch (error) {
      return null;
    }
  };

  const project = await searchProject(id);

  if (!project) {
    const error = new Error("Project not found");
    return res.status(404).json({ message: error.message });
  }

  if (String(project.creator) !== String(req.user._id)) {
    const error = new Error("hey you cant visit is site, forbidden");
    return res.status(403).json({ message: error.message });
  }

  res.json(project);
};

const updateProjectById = async (req: RequestNvo, res: Response) => {
  res.json({ message: "Project updated" });
};
export { getProject, newProject, getProjectByID, updateProjectById };
