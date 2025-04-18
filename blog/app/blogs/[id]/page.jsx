"use client";

import { useParams } from "next/navigation";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get(`https://blogger-backend-k1gt.onrender.com/api/blog/blogitem/${id}`)
    if(response.data){
       setData(response.data);
    }
   
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            alt=""
            width={80}
            height={80}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          alt=""
          width={1280}
          height={750}
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <> </>
  );
};

export default Page;
