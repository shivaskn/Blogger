import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import { Trash2 } from "lucide-react"; // Icon for delete

const Blogtable = ({ authorImg, title, author,date, deleteBlog, mongoId }) => {
    const blogDate = new Date(date);
  return (
    <tr className="bg-white border-b hover:bg-gray-100 transition-all duration-200">
      {/* Author Column */}
      <th
        scope="row"
        className="flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
          alt="Author Image"
          className="rounded-full border border-gray-300 shadow-sm"
        />
        <p className="text-gray-700 font-semibold">{author ? author : "No Author"}</p>
      </th>

      {/* Title Column */}
      <td className="px-6 py-4 text-gray-600">{title ? title : "No title"}</td>

      {/* Date Column */}
      <td className="px-6 py-4 text-gray-500">{blogDate.toDateString()}</td>

      {/* Delete Button */}
      <td onClick={()=> deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer text-red-500 hover:text-red-700 transition-all duration-200">
        <Trash2 size={20} />
      </td>
    </tr>
  );
};

export default Blogtable;
