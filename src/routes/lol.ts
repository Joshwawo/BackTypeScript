import {Router} from 'express';
import {getChamps,getSummoner} from '../controllers/lolCtrl'

const router = Router()


router.get("/champs", getChamps)
router.get("/summoner",getSummoner )
 
export {router}