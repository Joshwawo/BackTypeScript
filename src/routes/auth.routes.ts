import { Request, Response, Router } from "express";

import {LoginController,registerController} from '../controllers/auth'

const router = Router()

router.post("/register",registerController)
router.post("/login",LoginController)

export {router}