'use client'
import React from "react";
import { useState } from "react";

import WebLogo from "./WebLogo";

export default function Navbar() {

  const isAdmin:boolean = false;
  const isLogin:boolean = true;

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)


  

  return (
    <>
      <nav className="flex justify-between p-[16.5px] items-center shadow-sm bg-white sticky top-0 z-50">

        <div className="flex items-center ml-50 cursor-pointer max-lg:ml-7">
          <WebLogo />
          <h1
            data-lov-id="src/components/Header.tsx:21:12"
            data-lov-name="h1"
            data-component-path="src/components/Header.tsx"
            data-component-line="21"
            data-component-file="Header.tsx"
            data-component-name="h1"
            data-component-content="%7B%22text%22%3A%22ThaiBlogs%22%2C%22className%22%3A%22text-2xl%20font-bold%20bg-gradient-to-r%20from-blue-600%20to-purple-600%20bg-clip-text%20text-transparent%22%7D"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3"
          >
            Postify
          </h1>
          {isAdmin ? (
            <span className="bg-red-200 text-red-600 px-4 ml-3 rounded-2xl border border-red-400 hover:bg-white duration-300"> Admin</span>
          ):null}
        </div> 
        
        <div className="flex space-x-7 max-lg:hidden">
          <a href="/" className="text-[#384152] hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text">หน้าแรก</a>
          <a href="/articles" className="text-[#384152] hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text">บทความ</a>
          <a href="" className="text-[#384152] hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text">เกี่ยวกับเรา</a>
        </div>

        {isLogin ? (
          <div className="flex mr-50 space-x-5 max-lg:mr-7 max-lg:hidden items-center relative">
              <a className="bg-gradient text-white px-3 py-2 rounded-lg text-[14px] cursor-pointer flex items-center space-x-2" href="/create">
                <img src="../pen.png" alt="" width={20}/>
                <p> เขียนบทความ </p>
              </a>
            <span className="rounded-[100%] w-10 h-10 p-3 flex justify-center items-center bg-gradient text-white cursor-pointer" onClick={() => {setIsDropdownOpen(!isDropdownOpen)}}>
                J
            </span>
            
            {/* Profile dropdown */}
            
            
              <div className={`absolute top-full left-0 w-full mt-2 z-50 bg-white rounded shadow-md border border-gray-200 transition-all ${isDropdownOpen ? 'max-h-60 opacity-100': 'max-h-0 opacity-0'}`}>
                <div className="p-3 border-b border-gray-300">
                    <h1 className="text-lg"> ผู้ดูแลระบบ </h1>
                    <p className="text-sm mt-2 text-gray-500"> admin@postify.com </p>
                </div>

                <div className="border-b border-gray-300">
                  <div className="p-1.5 rounded-lg">
                      <a href="/profile" className="flex items-center space-x-3 hover:bg-gray-100 duration-200 p-1">
                        <img src="../person-black.png" alt="" width={23} className="ml-2"/>
                        <p className="pt-1"> โปรไฟล์ </p>
                      </a>
                  </div>

                  {isAdmin ? (
                    <div className="p-1.5 rounded-lg">
                      <a href="/admin" className="flex items-center space-x-3 hover:bg-gray-100 duration-200 p-1">
                        <img src="../setting.png" alt="" width={23} className="ml-2"/>
                        <p className="pt-1"> จัดการระบบ </p>
                      </a>
                  </div>
                  ): null}
                  
                </div>

                <div className="p-1.5 rounded-lg">
                    <a href="" className="flex items-center space-x-3 hover:bg-gray-100 duration-200 p-1">
                      <img src="../logout.png" alt="" width={23} className="ml-2"/>
                      <p className="pt-1"> ออกจากระบบ </p>
                    </a>
                </div>
            </div>
            
            

            {/* dropdown */}
          </div>
        ): (
          <div className="flex mr-50 space-x-3 max-lg:mr-7 max-lg:hidden">
            <a className="border border-gray-300 px-4 py-2 rounded-lg text-[14px] hover:scale-105 hover:bg-gray-100 duration-300 cursor-pointer" href="/login"> เข้าสู่ระบบ </a>
            <a className="bg-gradient text-white px-3 py-2 rounded-lg text-[14px] cursor-pointer" href="/register"> สมัครสมาชิก </a>
        </div>
        )}

        

        <img src="../menu.png" alt="" width={30} className="hidden max-lg:block" onClick={() =>{setIsOpen(!isOpen)}}/>

      </nav>

      {/* Nav อันล่างเวลาจอเล็ก */}

      {isOpen ? (
        
        <div className="fixed inset-0 bg-black/50 z-40"></div>
       
      ): null}

        <section className={`bg-white lg:hidden fixed bottom-0 w-full z-50 shadow-md overflow-hidden transition-all duration-500 ease-in-out rounded-t-xl ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}> 

          <div className="p-3 flex flex-col space-y-3">
            <h1 className="text-xl mt-3"> เมนู </h1>
            <h2 className="text-gray-600"> เลือกหน้าที่ต้องการไป </h2>
          </div>

          <div className="hidden max-lg:flex text-center p-3 flex-col items-start space-y-5 m-3 border-b border-gray-300 pb-3">
            <a href="/" className="from-blue-600 to-purple-600 bg-gradient-to-r text-transparent bg-clip-text">หน้าแรก</a>
            <a href="/articles" className="from-blue-600 to-purple-600 bg-gradient-to-r text-transparent bg-clip-text">บทความ</a>
            <a href="" className="from-blue-600 to-purple-600 bg-gradient-to-r text-transparent bg-clip-text">เกี่ยวกับเรา</a>
          </div>

          {/* เช็คว่า Login หรือยัง */}

          {isLogin ? ( 
            <div className="flex flex-col gap-5 p-3 mb-5">

                <div className="flex items-center space-x-4">
                    <span className="rounded-[100%] w-12 h-12 p-3 flex justify-center items-center bg-gradient text-white cursor-pointer"> J </span>
                    <div>
                       <h2> ผู้ดูแลระบบ </h2>
                       <p className="text-gray-600"> admin@postify.com </p>
                    </div>
                </div>

                <div className="my-2 flex flex-col space-y-5">
                   <a href="/create" className="flex items-center space-x-3"> 
                      <img src="../pen-black.png" alt="" width={20}/>
                      <p> เขียนบทความ </p>
                   </a>
                  <a href="/profile" className="flex items-center space-x-3"> 
                      <img src="../person-black.png" alt="" width={20}/>
                      <p> โปรไฟล์ </p>
                   </a>
                   <a href="/admin" className="flex items-center space-x-3"> 
                      <img src="../setting.png" alt="" width={20}/>
                      <p> จัดการระบบ </p>
                   </a>
                   <a href="/login" className="flex items-center space-x-3"> 
                      <img src="../exit-red.png" alt="" width={20}/>
                      <p className="text-red-500"> ออกจากระบบ </p>
                   </a>
                </div>

                <button className="border border-gray-300 px-4 py-2 rounded-lg text-[14px] hover:scale-105 hover:bg-gray-100 duration-300 cursor-pointer text-center" onClick={() =>{setIsOpen(false)}}> ปิด </button>
          </div>
          ): (

            <div className="flex flex-col gap-5 p-3 mb-5">
              <a className="border border-gray-300 px-4 py-2 rounded-lg text-[14px] hover:scale-105 hover:bg-gray-100 duration-300 cursor-pointer text-center" href="/login"> เข้าสู่ระบบ </a>
              <a className="bg-gradient text-white px-3 py-2 rounded-lg text-[14px] cursor-pointer text-center" href="/register"> สมัครสมาชิก </a>
              <button className="border border-gray-300 px-4 py-2 rounded-lg text-[14px] hover:scale-105 hover:bg-gray-100 duration-300 cursor-pointer text-center" onClick={() =>{setIsOpen(false)}}> ปิด </button>
          </div>
            
          )}
          
      </section>
      
      
    

     
    </>
    
  );
}
