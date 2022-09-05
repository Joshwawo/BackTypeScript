import { Request, Response } from "express";

import { loginUser, registerNewUser } from "../services/authServices";

const registerController = async (req: Request, res: Response) => {

    const body = req.body;

    // const respuestaUser = await registerNewUser()

};

const LoginController = async (req: Request, res: Response) => {};

export { registerController, LoginController };
