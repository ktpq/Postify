'use server'
import React from 'react'
import { redirect } from 'next/navigation';
import axios from 'axios';

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params
  const base_api = process.env.API_URL
  const response = await axios.get(`${base_api}/api/posts/${id}`)
  const data = response.data;
  const post = data.postDetail
  if (!post){
    redirect('/')
  }

  const date = post.post_createdAt;
  const formattedDate = new Date(date).toLocaleDateString("th-TH");


  return (
    <>
    <a className='mx-50 mt-10 flex items-center max-lg:mx-7' href='/articles'>
        <img src="../back.png" alt="" width={30}/>
        <p> กลับสู่หน้าบทความ</p>
    </a>
    <section className='bg-white p-8 mx-50 mt-10 rounded-lg shadow-md max-lg:mx-7'>
        <p className='text-white bg-black rounded-3xl mx-auto w-fit px-3 py-0.5 my-3'> {post.post_category} </p>
        <h1 className='text-center text-3xl my-5 font-bold'> {post.post_title} </h1>
        
        {/* Attribute ของ โพสต์ */}
        <div className='flex space-x-7 justify-center items-center max-sm:space-x-2'>
            <div className='flex max-sm:flex-col max-sm:space-y-2'> 
                <img src="../person.png" alt="" width={20} className='max-sm:mx-auto'/>
                <p className='ml-3'> {post.user.user_username} </p>
            </div>
            <div className='flex max-sm:flex-col max-sm:space-y-2'>
                <img src="../calendar.png" alt="" width={20} className='max-sm:mx-auto'/>
                <p className='ml-3'> {formattedDate} </p>
            </div> 
            <div className='flex max-sm:flex-col max-sm:space-y-2'>
                <img src="../views.png" alt="" width={20} className='max-sm:mx-auto'/>
                <p className='ml-3'> {post.post_view} ครั้ง </p>
            </div>
            
        </div>

        <main className='my-10'>
            <p className='my-5 whitespace-pre-line text-lg'> {post.post_content}</p>
            
        </main>

    </section>

    </>
  )
}
