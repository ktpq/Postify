'use client'
import React from "react";
import { useRouter } from "next/navigation";


interface Props{
  userData: any
}

export default function HomeGetStarted({userData}: Props) {
  const router = useRouter()
  const handleClick = () =>{
    if (userData){
      router.push('/')
    } else {
      router.push('/register')
    }
  }
  return (
    <section className="flex justify-center items-center h-[450px] bg-gradient text-center mt-20">
      <div className="w-fit">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trending-up w-16 h-16 mb-6 opacity-80 text-white mx-auto"
            data-lov-id="src/components/CTASection.tsx:16:8"
            data-lov-name="TrendingUp"
            data-component-path="src/components/CTASection.tsx"
            data-component-line="16"
            data-component-file="CTASection.tsx"
            data-component-name="TrendingUp"
            data-component-content="%7B%22className%22%3A%22w-16%20h-16%20mx-auto%20mb-6%20opacity-80%22%7D">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
        <h2 className="text-white text-4xl"> พร้อมจะเริ่มเรียนหรือยัง </h2>
        <p className="text-white text-[20px] mt-5"> เข้าร่วมกับชุมชนนักเขียนไทยหลายพันคน แบ่งปันประสบการณ์ เรียนรู้ไปด้วยกัน </p>
        <button className="shadow-md px-6 py-3 rounded-lg text-[20px] hover:scale-105 hover:bg-gray-100 duration-300 bg-white cursor-pointer mt-6" onClick={handleClick}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                สมัครสมาชิกฟรี
            </span>
        </button>

      
      </div>

      
    </section>
  );
}
