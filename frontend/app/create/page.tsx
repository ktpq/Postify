'use client'
import React from 'react'


import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'

import SelectCategory from './SelectCategory'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function page() {

  const [ articleContent, setArticleContent ] = useState<string>("");

  useEffect(() =>{
    AOS.init();
  }, [])
  
  return (
    <>
    <Navbar/>

    <section className='bg-white w-[55vw] mx-auto mt-7 p-7 shadow-md rounded-lg max-xl:w-[80vw] max-sm:w-[93vw]' data-aos="fade-up" data-aos-duration="750">
        <h1 className='text-3xl text-center'> เขียนบทความใหม่ </h1>

        <p className='mt-8'> หัวข้อบทความ </p>
        <input type="text" className='mt-2 w-full border border-gray-300 py-3 rounded-lg px-4 text-gray-700' placeholder='ใส่หัวข้อบทความของคุณ'/>
        
        <p className='mt-8'> รายละเอียดบทความ </p>
        <input type="text" className='mt-2 w-full border border-gray-300 py-3 rounded-lg px-4 text-gray-700' placeholder='ใส่รายละเอียดบทความของคุณ'/>

        <p className='mt-8'> หมวดหมู่ </p>
        <SelectCategory/>
        

        <p className='mt-8'> เนื้อหาบทความ </p>
        <textarea className='mt-2 w-full border border-gray-300 py-3 rounded-lg px-4 text-gray-700 h-[300px]' placeholder='เขียนเนื้อหาบทความของคุณที่นี่...' value={articleContent} onChange={(event:React.ChangeEvent<HTMLTextAreaElement>) => {setArticleContent(event.target.value)}}/>
        
        <div className='flex justify-between items-center mt-5 max-sm:flex-col max-sm:space-y-4'>
            <p className='text-gray-500'> {articleContent.length} ตัวอักษร </p>
            <div className='flex items-center space-x-4 max-sm:space-x-3'>
                <button className='flex space-x-2.5 border px-4 py-2 border-gray-300 borer rounded-lg hover:bg-gray-100 hover:scale-105 duration-200 max-sm:flex-col max-sm:items-center max-sm:space-y-2 cursor-pointer'>
                    <img src="../save.png" alt="" width={25}/>
                    <p> บันทึกร่าง </p>
                </button>
                <button className='flex space-x-2.5 border px-4 py-2 bg-gradient text-white rounded-lg max-sm:flex-col max-sm:items-center max-sm:space-y-2 cursor-pointer'>
                    <img src="../views-white.png" alt="" width={25}/>
                    <p> เผยแพร่ </p>
                </button>
            </div>
        </div>

    </section>
    </>
  )
}
