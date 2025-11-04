import React from 'react'
import { redirect } from 'next/navigation'

import EditProfileForm from './EditProfileForm'

import { getProfile } from '../getProfile'

import axios from 'axios'

export default async function page(){

  const base_api = process.env.API_URL
  const dataId = await getProfile()
 
  if (!dataId.userData){
    redirect('/')
  }
  const userId = dataId.userData.id;
  
  const response = await axios.get(`${base_api}/api/users/${userId}`);
   
  const data = response.data;
  const userData = data.userData;

  const letter = userData.user_username[0].toUpperCase()

  return (
    <>
    <section className='mx-70 max-xl:mx-20 max-lg:mx-0 pb-10'>
        <a href="/profile" className='flex items-center mt-10 max-lg:ml-10'>
            <img src="/back.png" alt="" width={30}/>
            <p> ย้อนกลับ </p>
        </a>
       
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pt-10 max-lg:ml-10"> แก้ไขโปรไฟล์ </h1>
        <main className='bg-white rounded-lg shadow-md w-[40vw] mx-auto mt-7 p-7 max-xl:w-[75vw] max-md:w-[90vw]'>

            <div className='flex flex-col items-center space-y-3'>
                <span className="rounded-[100%] w-26 h-26 p-3 flex justify-center items-center bg-gradient text-white cursor-pointer text-3xl"> {letter}</span>
                <h2 className='text-[30px] text-center mt-3'> แก้ไขข้อมูลโปรไฟล์ </h2>
                <p className='text-gray-600'> อัปเดตข้อมูลส่วนตัวของคุณ</p>
            </div>

            <EditProfileForm userData={userData} userId={userId}/>

        </main>
    </section>
    </>
  )
}
