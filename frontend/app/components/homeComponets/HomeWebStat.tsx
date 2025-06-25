'use client'
import React from "react";

import { useEffect } from "react";

import { BookIcon, HumanIcon, PenIcon, StarIcon } from "@/app/iconElement";

import HomeStatCard from "./HomeStatCard";

import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props{
  postCount: number
  allUser: number
  postToday: number
  allPostView:number
}

export default function HomeWebStat({postCount, allUser, postToday, allPostView}: Props) {

  useEffect(() =>{
    AOS.init()
  })
  
  return (
    <section className="grid grid-cols-4 mx-50 gap-8 max-md:mx-15 max-lg:grid-cols-2 max-md:grid-cols-1"  data-aos="fade-up" data-aos-duration="1000">
      <HomeStatCard icon={<BookIcon />} count={postCount} title="บทความทั้งหมด" />
      <HomeStatCard icon={<HumanIcon />} count={allUser} title="นักเขียน" />
      <HomeStatCard icon={<PenIcon />} count={postToday} title="บทความใหม่วันนี้" />
      <HomeStatCard icon={<StarIcon />} count={allPostView} title="ยอดเข้าชมทั้งหมด" />
    </section>
  );
}
