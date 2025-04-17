// import { writeFile } from "fs/promises";
// import { ConnectDB } from "@/lib/config/db";
// import blog from "@/lib/models/blogModel";
// import { NextResponse } from "next/server";
// import fs from "fs";

// const loadDB = async () => {
//   await ConnectDB();
// };

// loadDB();

// // API for upload
// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const timestamp = Date.now();

//     const image = formData.get("image");
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);

//     const path = `./public/${timestamp}_${image.name}`;
//     await writeFile(path, buffer);

//     const imgUrl = `/${timestamp}_${image.name}`;

//     const blogData = {
//       title: `${formData.get("title")}`,
//       description: `${formData.get("description")}`,
//       category: `${formData.get("category")}`,
//       author: `${formData.get("author")}`,
//       image: `${imgUrl}`,
//       authorImg: `${formData.get("authorImg")}`,
//     };

//     await blog.create(blogData);
//     console.log("Blog saved");

//     return NextResponse.json({
//       success: true,
//       message: "Blog Added",
//     });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

// // API for get blog
// export async function GET(request) {
//   try {
//     const blogId = request.nextUrl.searchParams.get("id");

//     if (blogId) {
//       const Blog = await blog.findById(blogId);
//       return NextResponse.json(Blog);
//     } else {
//       const blogs = await blog.find({});
//       return NextResponse.json({
//         success: true,
//         blogs,
//       });
//     }
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

// // API for delete blog

// export async function DELETE(request) {
//   try {
//     const id = await request.nextUrl.searchParams.get("id");
//     const blogs = await blog.findById(id);
//     fs.unlink(`./public${blogs.image}`, () => {});
//     await blog.findByIdAndDelete(id);
//     return NextResponse.json({
//       success: true,
//       message: "Blog has been deleted",
//     });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }
