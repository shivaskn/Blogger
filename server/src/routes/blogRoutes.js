import express from "express";
import upload from "../middlewares/multerConnection.js";
import { addBlog, deleteBlogById, getAllBlog, getSingleBlog } from "../controller/blogController.js";

const blogRouter = express.Router();

blogRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "authorImg", maxCount: 1 },
  ]),
  addBlog
);

blogRouter.get("/all", getAllBlog);
blogRouter.get("/blogitem/:_id",getSingleBlog );
blogRouter.delete("/delete/:_id",deleteBlogById );

export default blogRouter;
