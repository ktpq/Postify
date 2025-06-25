'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import SelectCategory from './SelectCategory'
import Swal from 'sweetalert2'

import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'

interface Props{
    userId:number
}

export default function CreateForm({userId}: Props) {

     useEffect(() =>{
        AOS.init();
    }, [])

    const router = useRouter()

    const [articleTitle, setArticleTitle] = useState<string>("")
    const [articleDescription, setArticleDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("เลือกหมวดหมู่")
    const [ articleContent, setArticleContent ] = useState<string>("");
    
    const handleSubmit = async (status: string) =>{
        if (!articleTitle || !articleDescription || !articleContent){
            return Swal.fire({
                title: "คุณใส่ข้อมูลไม่ครบถ้วน !",
                text: "ใส่ข้อมูลให้ครบเเล้วลองใหม่อีกครั้ง !",
                icon: "error"
            });
        }

        if (category == "เลือกหมวดหมู่"){
            return Swal.fire({
                title: "คุณยังไม่ได้เลือกหมวดหมู่ !",
                text: "เลือกหมวดหมู่เเล้วลองใหม่อีกครั้ง !",
                icon: "error"
            });
        }

        // ผ่านทุกเงื่อนไขส่งข้อมูล


        if (status === "เผยแพร่แล้ว"){
            Swal.fire({
            title: "คุณต้องการเผยแพร่บทความ ?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก"
            }).then(async (result) => {
            if (result.isConfirmed) {
                const base_api = process.env.NEXT_PUBLIC_API_URL
                await axios.post(`${base_api}/api/posts`, {
                    title: articleTitle, description: articleDescription, category: category, content: articleContent, status: status, userId: userId
                })
                Swal.fire({
                    title: "เผยแพร่บทความเรียบร้อยเเล้ว!",
                    icon: "success"
                });
                router.push('/profile')
           
            }
            })
        }

        if (status === "ร่าง"){
            const base_api = process.env.NEXT_PUBLIC_API_URL
            await axios.post(`${base_api}/api/posts`, {
                title: articleTitle, description: articleDescription, category: category, content: articleContent, status: status, userId: userId
            })
            Swal.fire({
                title: "บันทึกร่างบทความเรียบร้อยเเล้ว!",
                icon: "success"
            });
            router.push('/profile')
        }
        
    }
    

  return (
    <section className='bg-white w-[55vw] mx-auto mt-7 p-7 shadow-md rounded-lg max-xl:w-[80vw] max-sm:w-[93vw]' data-aos="fade-up" data-aos-duration="750">
        <h1 className='text-3xl text-center'> เขียนบทความใหม่ </h1>

        <p className='mt-8'> หัวข้อบทความ </p>
        <input type="text" className='mt-2 w-full border border-gray-300 py-3 rounded-lg px-4 text-gray-700' placeholder='ใส่หัวข้อบทความของคุณ' value={articleTitle} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setArticleTitle(event.target.value)}}/>
        
        <p className='mt-8'> รายละเอียดบทความ </p>
        <input type="text" className='mt-2 w-full border border-gray-300 py-3 rounded-lg px-4 text-gray-700' placeholder='ใส่รายละเอียดบทความของคุณ' value={articleDescription} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setArticleDescription(event.target.value)}}/>

        <p className='mt-8'> หมวดหมู่ </p>
        <SelectCategory category={category} setCategory={setCategory}/>
        

        <p className='mt-8'> เนื้อหาบทความ </p>
        <textarea className='mt-2 w-full border border-gray-300 py-3 rounded-lg px-4 text-gray-700 h-[300px]' placeholder='เขียนเนื้อหาบทความของคุณที่นี่...' value={articleContent} onChange={(event:React.ChangeEvent<HTMLTextAreaElement>) => {setArticleContent(event.target.value)}}/>
        
        <div className='flex justify-between items-center mt-5 max-sm:flex-col max-sm:space-y-4'>
            <p className='text-gray-500'> {articleContent.length} ตัวอักษร </p>
            <div className='flex items-center space-x-4 max-sm:space-x-3'>
                {/* <button className='flex space-x-2.5 border px-4 py-2 border-gray-300 borer rounded-lg hover:bg-gray-100 hover:scale-105 duration-200 max-sm:flex-col max-sm:items-center max-sm:space-y-2 cursor-pointer' onClick={() => {handleSubmit("ร่าง")}}>
                    <img src="../save.png" alt="" width={25}/>
                    <p> บันทึกร่าง </p>
                </button> */}
                <button className='flex space-x-2.5 border px-4 py-2 bg-gradient text-white rounded-lg max-sm:flex-col max-sm:items-center max-sm:space-y-2 cursor-pointer' onClick={() => {handleSubmit("เผยแพร่แล้ว")}}>
                    <img src="../views-white.png" alt="" width={25}/>
                    <p> เผยแพร่ </p>
                </button>
            </div>
        </div>

    </section>
  )
}
