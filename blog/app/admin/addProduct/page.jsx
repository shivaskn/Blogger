"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [authorImage, setAuthorImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Technology",
    author: "Shiva",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", authorImage);
    formData.append("image", image);

    const response = await axios.post("http://localhost:8000/api/blog/add", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        title: "",
        description: "",
        category: "Technology",
        author: "Shiva",
      });
      setImage(false)
      setAuthorImage(false)
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail For Post</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            width={140}
            height={70}
            className="mt-4 cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
          <p className="text-xl pt-3">Upload Athour Image</p>
        <label htmlFor="authorImg">
          <Image
            src={!authorImage ? assets.upload_area : URL.createObjectURL(authorImage)}
            alt=""
            width={140}
            height={70}
            className="mt-4 cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => setAuthorImage(e.target.files[0])}
          type="file"
          id="authorImg"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={handleChange}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Enter Your Title Please"
          required
        />

        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={handleChange}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Enter Your Blog Description Please"
          required
          rows={6}
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          onChange={handleChange}
          value={data.category}
          name="category"
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Movies">Movies</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white cursor-pointer rounded-md"
        >
          Add Blog
        </button>
      </form>
    </>
  );
};

export default page;
