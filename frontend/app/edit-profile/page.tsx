'use client'

import React from 'react'
import { useState } from 'react'

import Navbar from '../components/Navbar'

export default function page() {
  
  return (
    <>
    <Navbar/>
    <section className='mx-70 max-xl:mx-20 max-lg:mx-0 pb-10'>
        <a href="/profile" className='flex items-center mt-10 max-lg:ml-10'>
            <img src="../back.png" alt="" width={30}/>
            <p> ย้อนกลับ </p>
        </a>
       
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pt-10 max-lg:ml-10"> แก้ไขโปรไฟล์ </h1>
        <main className='bg-white rounded-lg shadow-md w-[40vw] mx-auto mt-7 p-7 max-xl:w-[75vw] max-md:w-[90vw]'>

            <div className='flex flex-col items-center space-y-3'>
                <div className="avatar mt-3">
                    <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring-2 ring-offset-2">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div> 
                <h2 className='text-[30px] text-center mt-3'> แก้ไขข้อมูลโปรไฟล์ </h2>
                <p className='text-gray-600'> อัปเดตข้อมูลส่วนตัวของคุณ</p>
            </div>

            <p className='mt-8'> ชื่อผู้ใช้ </p>
            <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700'/> 

            <p className='mt-8'> อีเมล์</p>
            <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700'/>

            <p className='mt-8'> แนะนำตัว </p>
            <textarea className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700'/>

            <p className='mt-8'> เว็บไซต์ </p>
            <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700'/>

            <p className='mt-8'> ที่อยู่ </p>
            <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700'/>

            <div className='grid grid-cols-2 mt-10 space-x-5'>
                <button className='py-2 border border-gray-300 rounded-lg cursor-pointer hover:scale-105 duration-200 hover:bg-gray-100'>ยกเลิก</button>
                <button className='py-2 bg-gradient text-white rounded-lg cursor-pointer '>บันทึกการเปลี่ยนแปลง</button>
            </div>

            

        </main>
                    
    </section>
    </>
  )
}
