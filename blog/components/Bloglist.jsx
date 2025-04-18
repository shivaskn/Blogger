"use client";

import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Blogitem from "./Blogitem";
import axios from "axios";
import SkeleCart from "./SkeleCart";
import { useParams } from "next/navigation";

const Bloglist = () => {
  const [menu, SetMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [load, setLoad] = useState(true);
  const {id} = useParams();

  

  const fetchBlogs = async () => {
    const response = await axios.get(`https://blogger-backend-k1gt.onrender.com/api/blog/all`);
    console.log("Fetched blog response:", response.data); 
    if (response.data.success) {
      setBlogs(response.data.blogs);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      setLoad(false);
    }
  }, [blogs]);
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => SetMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm  hover:transition-all" : ""
          }
        >
          ALL
        </button>
        <button
          onClick={() => SetMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm hover:transition-all"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => SetMenu("Sports")}
          className={
            menu === "Sports" ? "bg-black text-white py-1 px-4 rounded-sm hover:transition-all" : ""
          }
        >
          Sports
        </button>
        <button
          onClick={() => SetMenu("Movies")}
          className={
            menu === "Movies" ? "bg-black text-white py-1 px-4 rounded-sm hover:transition-all" : ""
          }
        >
          Movies
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {load ? (
          <div className="flex justify-center items-center  w-full  overflow-hidden ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
              {Array.from({ length: 12 }).map((_, index) => (
                <SkeleCart key={index} />
              ))}
            </div>
          </div>
        ) : (
          blogs
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item, index) => {
              return (
                <Blogitem 
                  key={index}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  authorImg={item.authorImg}
                />
              );
            })
        )}
      </div>
    </div>
  );
};

export default Bloglist;
