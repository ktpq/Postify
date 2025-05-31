import React from "react";

import WebLogo from "./WebLogo";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-[16.5px] items-center shadow-sm bg-white">

      <div className="flex items-center ml-50 cursor-pointer0">
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
          ThaiBlogs
        </h1>
      </div>
      
      <div className="flex space-x-7">
        <a href="" className="text-[#384152] hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text">หน้าแรก</a>
        <a href="" className="text-[#384152] hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text">บทความ</a>
        <a href="" className="text-[#384152] hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text">หมวดหมู่</a>
        <a href="" className="text-[#384152] hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text">เกี่ยวกับเรา</a>
      </div>

      <div className="flex mr-50 space-x-3">
        <button className="border border-gray-300 px-4 py-2 rounded-lg text-[14px] hover:scale-105 hover:bg-gray-100 duration-300 cursor-pointer"> เข้าสู่ระบบ </button>
        <button className="bg-gradient text-white px-3 py-2 rounded-lg text-[14px] cursor-pointer"> สมัครสมาชิก </button>
      </div>

    </nav>
  );
}
