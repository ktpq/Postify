'use client'
import React from "react";
import { useState, useEffect } from "react";

import WebLogo from "../components/WebLogo";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { handleLogin } from "./helper";


export default function LoginSection() {

     const [inputEmail, setInputEmail] = useState<string>("");
     const [inputPassword, setInputPassword] = useState<string>("");

  useEffect(()=>{
    AOS.init()
  })

  const onSubmitButton = () => {
    handleLogin(inputEmail, inputPassword)
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
        <section className="w-[450px] max-sm:w-[95vw]" data-aos="zoom-in" data-aos-duration="1000">
            <div className="flex w-fit mx-auto py-10 cursor-pointer">
                <WebLogo />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3"> Postify </h1>
            </div>

            <div className="bg-white shadow-md p-7 rounded-lg">
                <h2 className="text-center text-2xl font-bold"> เข้าสู่ระบบ </h2>
                <p className="text-center mt-3 text-gray-500">เข้าสู่บัญชีของคุณเพื่อเริ่มเขียนบทความ </p>


                <p className="mt-8 mb-2"> อีเมล </p>
                <div className="relative">
                <img src="./mail.png" alt="" width={22} className="absolute left-4 top-3.5"/>
                <input type="text" className="border border-gray-200 rounded-lg w-full py-3 pl-13 pr-5 font-light" placeholder="your@email.com" value={inputEmail} onChange={(event:React.ChangeEvent<HTMLInputElement>) => setInputEmail(event.target.value)}/>
                </div>

                <p className="mt-8 mb-2"> รหัสผ่าน </p>
                <div className="relative">
                <img src="./lock.png" alt="" width={22} className="absolute left-4 top-3.5"/>
                <input type="password" className="border border-gray-200 rounded-lg w-full py-3 pl-13 pr-5 font-light" placeholder="รหัสผ่านของคุณ" value={inputPassword} onChange={(event:React.ChangeEvent<HTMLInputElement>) => setInputPassword(event.target.value)}/>
                </div>

                {/* <div className="mt-8 flex justify-between  items-center">
                <div className="flex items-center">
                    <input type="checkbox" className="scale-110"/>
                    <p className="ml-3 text-gray-500"> จดจำการเข้าสู่ระบบ </p>
                </div>
                <a href="" className="text-blue-600"> ลืมรหัสผ่าน ? </a>
                </div> */}

                <button className="mt-8 bg-gradient w-full text-white py-4 rounded-lg shadow-sm" onClick={onSubmitButton}> เข้าสู่ระบบ </button>

                <p className="text-center mt-8"> ยังไม่มีบัญชี ? <a href="/register" className="text-blue-600">สมัครสมาชิก </a></p>
            </div>

            <div className="py-6 text-center">
                <a href="/" className="mt-8 text-gray-500"> กลับสู่หน้าแรก </a>
            </div>
            </section>
    </div>
  )
}
