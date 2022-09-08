import { Request, Response, Router } from "express";

import {LoginController,registerController, testing} from '../controllers/auth'

const router = Router()

router.post("/register",registerController)
router.post("/login",LoginController)
router.get("/testing",testing )

export {router}