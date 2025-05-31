'use client'
import React from "react";

import { useEffect } from "react";

import { BookIcon, HumanIcon, PenIcon, StarIcon } from "../../icon";

import HomeStatCard from "./HomeStatCard";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeWebStat() {

  useEffect(() =>{
    AOS.init()
  })
  return (
    <section className="grid grid-cols-4 mx-50 gap-8"  data-aos="fade-up" data-aos-duration="1000">
      <HomeStatCard icon={<BookIcon />} count={1247} title="บทความทั้งหมด" />
      <HomeStatCard icon={<HumanIcon />} count={342} title="นักเขียน" />
      <HomeStatCard icon={<PenIcon />} count={28} title="บทความใหม่วันนี้" />
      <HomeStatCard icon={<StarIcon />} count={4.8} title="คะแนนเฉลี่ย" />
    </section>
  );
}
