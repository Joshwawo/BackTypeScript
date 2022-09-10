import {Router} from 'express'
import {getCards,getPlayerTag,getUpcomingchest ,getClan} from '../controllers/clashCtrl'  

const router = Router()


router.get("/cards", getCards)
router.get("/player",getPlayerTag)
router.get("/upcomingchests",getUpcomingchest)
router.get("/clan",getClan)



export {router}