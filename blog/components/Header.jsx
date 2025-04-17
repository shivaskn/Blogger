"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Header = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData();
      // formData.append("email", email);

      const response = await axios.post("http://localhost:8000/api/email/subscribe", {email});
      if (response.data.success) {
        toast.success(response.data.message);
        setEmail("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  const adminClick = () => {
    toast.info('You cannot access admin page')
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button onClick={adminClick} className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-100 hover:transition-all">
          Admin Panel <Image src={assets.arrow} alt="" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Discover insightful articles, trending news, and expert opinions on
          Blogger. Stay informed, inspired, and engaged with fresh content
          daily!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none "
            required
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white hover:bg-gray-100 hover:transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
