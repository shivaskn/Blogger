"use client";

import Blogtable from "@/components/admin Components/Blogtable";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const {id} = useParams()

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/blog/all");
      setBlogs(response.data.blogs);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/blog/delete/${id}`)
      toast.success(response.data.message)
      fetchBlogs();
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className=" px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className=" px-6 py-3">
                Date
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return <Blogtable key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
