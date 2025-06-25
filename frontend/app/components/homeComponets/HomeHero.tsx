'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props{
  userData: any
}

export default function HomeHero({userData}: Props) {
  const router = useRouter()

  useEffect(() =>{
    AOS.init()
  })

  const getStart = () =>{
    if (userData){
      router.push('/create')
    } else {
      router.push('/login')
    }
  }

  const readPost = () =>{
    router.push('/articles')
  }

  return (
    <section className="flex justify-center items-center h-[730px]">
        <div className='text-center max-md:w-full' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-[#1f2838] text-[70px] font-bold max-sm:text-[55px]'> ยินดีต้อนรับสู่ </h1>
            <h2 className='text-[70px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent max-sm:text-[55px]'> Postify </h2>
            <p className='text-[20px] text-[#384152] max-sm:text-[18px]'> แพลตฟอร์มการเขียนบล็อกภาษาไทยที่ให้คุณแบ่งปันความคิด เรียนรู้จากผู้อื่น และสร้างชุมชนนักเขียนที่แข็งแกร่ง </p>

            <div className='space-x-5 mt-10'>
                <button className="bg-gradient text-white px-6 py-3 rounded-lg text-[20px] cursor-pointer" onClick={getStart}> เริ่มเขียนเลย </button>
                <button className="border border-gray-300 px-6 py-3 rounded-lg text-[20px] hover:scale-105 hover:bg-gray-100 duration-300 bg-white cursor-pointer" onClick={readPost}> อ่านบทความ </button>
            </div>
            
        </div>
    </section>
  )
}
