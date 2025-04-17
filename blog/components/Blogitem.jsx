"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Link from "next/link";
import { toast } from "react-toastify";

const Blogitem = ({ title, description, category, image, id }) => {

  return (
    <div className="max-w-[330px] sm:max-w-[400px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      {/* href={`/blogs/${id}`} */}
      <Link href={`/blogs/${id}`} >
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-black transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <p className="ml-5 mt-5 px-2 py-1 inline-block bg-black text-white text-sm rounded-3xl">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p
          className="mb-3 text-sm tracking-tight text-gray-700"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 px-3 font-semibold text-center border border-black rounded-4xl hover:bg-gray-100 hover:transition-all"
        >
          Read More{" "}
          <Image src={assets.arrow} alt="" width={12} className="ml-2 " />
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;
