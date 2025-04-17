import mongoose from "mongoose";

const blogSchemas = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    authorImg: { type: String, required: true },
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const blog = mongoose.models.blog || mongoose.model("blog", blogSchemas);

export default blog;