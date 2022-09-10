import {Router} from 'express'
import {getBlogs,postBlogs,getBlog,deleteBlog,updateBlog} from '../controllers/blogCtrl'

const router = Router()


router.get("/posts",getBlogs)
router.get("/posts/:id",getBlog)
router.post("/posts", postBlogs)
router.put("/posts/:id",updateBlog)
router.delete("/posts/:id", deleteBlog)

export {router}