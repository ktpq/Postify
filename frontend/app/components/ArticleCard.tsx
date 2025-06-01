'use client'
import React from 'react'

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ArticleCard() {

  useEffect(() =>{
    AOS.init()
  })
  
  return (
    <div className='bg-white hover:scale-103 rounded-lg shadow-sm duration-300'  data-aos="fade-up" data-aos-duration="1000">

            <div className='relative'>
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop" alt="" className='w-full rounded-t-lg'/>
                <span className='absolute left-3 top-3 bg-gradient px-4 py-1 text-white rounded-xl text-[15px]'> เทคโนโลยี </span>
            </div>

            <div className='p-5'>
                <h3 className='text-[22px]'> การเริ่มต้นเขียนบล็อกในปี 2024 </h3>
                <p className='text-[#6c6e70] mt-2'> เทคนิคและกลยุทธ์สำหรับการเริ่มต้นเขียนบล็อกที่จะทำให้คุณสามารถสร้างผู้อ่านได้อย่างต่อเนื่อง </p>
                <p className='mt-5 text-[#6c6e70]'> John Doe </p>

                <div className='flex justify-between items-center mt-5'>
                    <p className='text-[#6c6e70]'> 15 มี.ค. 2024 </p>
                    <a href="" className='px-3 py-2 rounded-lg hover:bg-gray-100 duration-200 hover:scale-105'> อ่านต่อ </a>
                </div> 
            </div>
                
        </div>
  )
}
