"use client";

import Bloglist from "@/components/Bloglist";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function Home() {
  useEffect(() => {
    toast.info(" 🎉 No Credentials Are Required", {
      position: "top-center",
      autoClose: 5000, // Time in ms
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark", // "light", "dark", "colored"
    });
  }, []);
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <Bloglist />
      <Footer />
    </>
  );
}
