import {Router} from 'express'
import {getBlogs,postBlogs,getBlog,deleteBlog} from '../controllers/blogCtrl'

const router = Router()


router.get("/posts",getBlogs)
router.get("/posts/:id",getBlog)
router.post("/posts", postBlogs)
router.delete("/posts/:id", deleteBlog)

export {router}