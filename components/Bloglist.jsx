"use client";

import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Blogitem from "./Blogitem";
import axios from "axios";

const Bloglist = () => {
    const [menu,SetMenu] = useState("All");
    const [blogs,setBlogs] = useState([])

    const fetchBlogs = async () => {
       const response = await axios.get('/api/blog');
       if(response.data.success){
        setBlogs(response.data.blogs);
       }
    }
  
    useEffect(()=>{
     fetchBlogs();
    },[])
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button onClick={()=> SetMenu('All')} className={menu === 'All' ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>
          ALL
        </button>
        <button onClick={()=> SetMenu('Technology')} className={menu === 'Technology' ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Technology</button>
        <button onClick={()=> SetMenu('Sports')} className={menu === 'Sports' ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Sports</button>
        <button onClick={()=> SetMenu('Movies')} className={menu === 'Movies' ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Movies</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
         {
            blogs.filter((item)=> menu === 'All' ? true : item.category === menu).map((item,index)=>{
                return <Blogitem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })
         }
      </div>
    </div>
  );
};

export default Bloglist;
