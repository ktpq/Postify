'use client'
import React from "react";
import { useState, useEffect } from "react";

import WebLogo from "../components/WebLogo";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Swal from "sweetalert2";
import axios from "axios";
import isEmail from "validator/lib/isEmail";


export default function page() {
  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState<string>("");

  useEffect(() => {
    AOS.init();
  }, []);



const handleRegister = async () => {
  // เช็คช่องว่าง
  if (!inputUsername || !inputEmail || !inputPassword || !inputConfirmPassword) {
    Swal.fire({
      title: "กรอกข้อมูลไม่ครบ",
      text: "กรุณากรอกข้อมูลให้ครบทุกช่อง!",
      icon: "warning",
    });
    return;
  }

  // ตรวจสอบอีเมล
  if (!isEmail(inputEmail)) {
    Swal.fire({
      title: "อีเมลไม่ถูกต้อง",
      text: "กรุณากรอกอีเมลที่ถูกต้อง เช่น your@email.com",
      icon: "error",
    });
    return;
  }

  // ตรวจสอบความยาวของรหัสผ่าน
  if (inputPassword.length < 6) {
    Swal.fire({
      title: "รหัสผ่านสั้นเกินไป",
      text: "กรุณาตั้งรหัสผ่านอย่างน้อย 6 ตัวอักษร",
      icon: "error",
    });
    return;
  }

  // ตรวจสอบว่ารหัสผ่านตรงกันไหม
  if (inputPassword !== inputConfirmPassword) {
    Swal.fire({
      title: "รหัสผ่านไม่ตรงกัน",
      text: "กรุณายืนยันรหัสผ่านให้ตรงกัน",
      icon: "error",
    });
    return;
  }

  // ✅ ถ้าทุกอย่างผ่าน
  try {
    const response = await axios.post("http://localhost:5000/api/register", {
      username: inputUsername,
      email: inputEmail,
      password: inputPassword,
    });

    if (response.data.error) {
      Swal.fire({
        title: "มีอีเมล์นี้อยู่ในระบบอยู่แล้ว",
        text: "กรุณาลองใหม่อีกครั้ง!",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "สมัครสมาชิกสำเร็จ!",
        text: "ไปหน้าเข้าสู่ระบบเพื่อใช้งาน",
        icon: "success",
      })
    }
  } catch (err) {
    Swal.fire({
      title: "เกิดข้อผิดพลาด",
      text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
      icon: "error",
    });
    console.error(err);
  }
};


  return (
    <section className="w-[450px] max-sm:w-[95vw]" data-aos="zoom-in" data-aos-duration="1000">
      <div className="flex w-fit mx-auto py-10 cursor-pointer">
          <WebLogo />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3"> Postify </h1>
      </div>

      <div className="bg-white shadow-md p-7 rounded-lg">
        <h2 className="text-center text-2xl font-bold"> สมัครสมาชิก </h2>
        <p className="text-center mt-3 text-gray-500"> สร้างบัญชีใหม่เพื่อเริ่มเขียนและแบ่งปันบทความ </p>

        <p className="mt-8 mb-2"> ชื่อผู้ใช้ </p>
        <div className="relative">
          <img src="./mail.png" alt="" width={22} className="absolute left-4 top-3.5"/>
          <input type="text" className="border border-gray-200 rounded-lg w-full py-3 pl-13 pr-5 font-light" placeholder="ชื่อผู้ใช้ของคุณ" value={inputUsername} onChange={(event:React.ChangeEvent<HTMLInputElement>) => setInputUsername(event.target.value)}/>
        </div>

        <p className="mt-8 mb-2"> อีเมล </p>
        <div className="relative">
          <img src="./mail.png" alt="" width={22} className="absolute left-4 top-3.5"/>
          <input type="text" className="border border-gray-200 rounded-lg w-full py-3 pl-13 pr-5 font-light" placeholder="your@email.com"  value={inputEmail} onChange={(event:React.ChangeEvent<HTMLInputElement>) => setInputEmail(event.target.value)}/>
        </div>

        <p className="mt-8 mb-2"> รหัสผ่าน </p>
        <div className="relative">
          <img src="./lock.png" alt="" width={22} className="absolute left-4 top-3.5"/>
          <input type="password" className="border border-gray-200 rounded-lg w-full py-3 pl-13 pr-5 font-light" placeholder="สร้างรหัสผ่านที่แข็งแกร่ง"  value={inputPassword} onChange={(event:React.ChangeEvent<HTMLInputElement>) => setInputPassword(event.target.value)}/>
        </div>

        <p className="mt-8 mb-2"> ยืนยันรหัสผ่าน </p>
        <div className="relative">
          <img src="./lock.png" alt="" width={22} className="absolute left-4 top-3.5"/>
          <input type="password" className="border border-gray-200 rounded-lg w-full py-3 pl-13 pr-5 font-light" placeholder="ยืนยันรหัสผ่านอีกครั้ง"  value={inputConfirmPassword} onChange={(event:React.ChangeEvent<HTMLInputElement>) => setInputConfirmPassword(event.target.value)}/>
        </div>

        

        <button className="mt-8 bg-gradient w-full text-white py-4 rounded-lg shadow-sm" onClick={handleRegister}> สมัครสมาชิก </button>

        <p className="text-center mt-8"> มีบัญชีแล้ว ? <a href="/login" className="text-blue-600"> เข้าสู่ระบบ </a></p>
      </div>

      <div className="py-6 text-center">
        <a href="/" className="mt-8 text-gray-500"> กลับสู่หน้าแรก </a>
      </div>
    </section>
  );
}
