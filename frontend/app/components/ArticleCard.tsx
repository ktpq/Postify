'use client'
import React from 'react'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

interface Props{
  title:string
  description: string
  author: string
  createdAt: Date
  postId: number
  category: string
}

export default function ArticleCard({title ="Default card title", description, author, createdAt, postId, category}:Props) {

  // const year = createdAt.split("-")[0]
  // const month = createdAt.split("-")[1]
  // const date = createdAt.split("-")[2]
  // const day = date.slice(0,2)

  const router = useRouter()

  const date = createdAt;
  // const formattedDate = new Date(date).toLocaleDateString("th-TH");

  useEffect(() =>{
    AOS.init()
  })

  const switchPage = async () =>{
    // getPostView อันปัจจุบัน
    const base_api = process.env.NEXT_PUBLIC_API_URL
    const viewResponse = await axios.get(`${base_api}/api/posts/view/${postId}`);
    const currectPostview = viewResponse.data.postView.post_view
    // เพิ่มยอดวิว
    const newPostview = currectPostview + 1;
    await axios.put(`${base_api}/api/posts/view/${postId}`, {view: newPostview});
    router.push(`/article/${postId}`)
    

  }
  
  return (

    //  data-aos="fade-up" data-aos-duration="1000"
    <div className='bg-white hover:scale-103 rounded-lg shadow-sm transition-all duration-300 p-5'>
            
            {/* <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop" alt="" className='w-full rounded-t-lg'/> */}
            <p className='bg-gradient px-4 py-0.5 text-white rounded-xl text-[15px] w-fit mt-1 mb-4'> {category} </p>
            

            <div className=''>
                <h3 className='text-[22px]'> {title} </h3>
                <p className='text-[#6c6e70] mt-2'> {description} </p>
                <p className='mt-12'> {author} </p>

                <div className='flex justify-between items-center mt-1'>
                    {/* <p className='text-[#6c6e70]'> {formattedDate} </p> */}
                    div
                    <button className='px-3 py-2 rounded-lg hover:bg-gray-100 duration-200 hover:scale-105 cursor-pointer' onClick={switchPage}> อ่านต่อ </button>
                </div> 
            </div>
                
        </div>
  )
}
