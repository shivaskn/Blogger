'use client'


import Bloglist from "@/components/Bloglist";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {  ToastContainer } from "react-toastify";

export default function Home() {


  useEffect(()=>{
    toast.warn('This Site Is Under Maintenance')
  },[])

  return (
  <>
  <ToastContainer/>
  <Header/>
  <Bloglist/>
  <Footer/>
  </>
  );
}
