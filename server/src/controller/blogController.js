import { v2 as cloudinary } from "cloudinary";
import blog from "../models/blogModel.js";

const addBlog = async (req, res) => {
  try {
    const { title, description, category, author } = req.body;

    const imageFile = req.files.image[0];
    const authorFile = req.files.authorImg[0];

    if (!title || !description || !category || !author) {
      return res.json({
        success: false,
        message: "Details Are Missing",
      });
    }

    // uploading image

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const authorUpload = await cloudinary.uploader.upload(authorFile.path, {
        resource_type: "image",
      });

    const imageUrl = imageUpload.secure_url;
    const authorUrl = authorUpload.secure_url

    const blogData = {
      title,
      description,
      category,
      author,
      authorImg: authorUrl,
      image: imageUrl,
    };

    const newBlog = await blog.create(blogData);
    res.json({
      newBlog,
      success: true,
      message: "New Blog has been added",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};


const getAllBlog = async (req,res)=> {
  try {
    const blogs = await blog.find({});
    res.json({
      success:true,
      blogs
    })
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}

const getSingleBlog = async (req,res)=> {
  try {
    const {_id} = req.params;
    const blogId = await blog.findById(_id);
    if(!blogId){
      return res.json({
        success:false,
        message:"Data might be deleted"
      });
    }

    res.json(blogId)
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}

const deleteBlogById = async (req,res) => {
  try {
    let {_id} = req.params;
    let deleteBlog = await blog.findByIdAndDelete(_id);
    if(!deleteBlog){
      return res.json({
        success:false,
        message:"Data might be deleted"
      })
    }
    res.json({
      success:true,
      message:"Blog has been deleted"
    })
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
}

export { addBlog, getAllBlog, getSingleBlog, deleteBlogById };
