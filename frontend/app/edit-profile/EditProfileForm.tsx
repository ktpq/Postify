'use client'
import React from 'react'
import { redirect } from 'next/navigation'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import axios from 'axios'
import Swal from 'sweetalert2'

interface data{
    user_username:string
    user_email:string
    user_createdAt:string
    user_description:string
    user_website:string
    user_address:string
}

interface Props{
    userData:data
    userId:number
}

export default function EditProfileForm({userData, userId}: Props) {
  const [username, setUsername] = useState<string>(userData?.user_username ?? '');
  const [email, setEmail] = useState<string>(userData?.user_email ?? '')
  const [description, setDescription] = useState<string>(userData?.user_description ?? '');
  const [website, setWebsite] = useState<string>(userData?.user_website ?? '')
  const [address, setAddress] = useState<string>(userData?.user_address ?? '')

  const router = useRouter()

  const handleSubmit = async () =>{
        Swal.fire({
            title: "ยืนยันการบันทึกข้อมูล ?",
            text: "คุณสามารถกลับมาแก้ไขได้ในภายหลัง",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก"
        }).then(async (result) => {
            if (result.isConfirmed) {
               const base_api = process.env.NEXT_PUBLIC_API_URL
               const response = await axios.put(`${base_api}/api/users/${userId}`, {username: username, email: email, description: description, website: website, address:address})
               console.log(response.data.message)
               Swal.fire({
                title: "บันทึกข้อมูลสำเร็จ",
                icon: "success"
              }).then(() =>{
                router.refresh()
              });
          }
        });
   
  }

  
  
  return (
    <>
    <p className='mt-8'> ชื่อผู้ใช้ </p>
    <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700' value={username} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setUsername(event.target.value)}}/> 

    <p className='mt-8'> อีเมล์</p>
    <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700' value={email} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}}/>

    <p className='mt-8'> แนะนำตัว </p>
    <textarea className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700' value={description} onChange={(event:React.ChangeEvent<HTMLTextAreaElement>) => {setDescription(event.target.value)}}/>

    <p className='mt-8'> เว็บไซต์ </p>
    <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700' value={website} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setWebsite(event.target.value)}}/>

    <p className='mt-8'> ที่อยู่ </p>
    <input type="text" className='mt-2 w-full border border-gray-300 py-2 rounded-lg px-4 text-gray-700' value={address} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setAddress(event.target.value)}}/>

    <div className='grid grid-cols-1 mt-10 space-x-5'>
        {/* <button className='py-2 border border-gray-300 rounded-lg cursor-pointer hover:scale-105 duration-200 hover:bg-gray-100'>ยกเลิก</button> */}
        <button className='py-2 bg-gradient text-white rounded-lg cursor-pointer' onClick={handleSubmit}>บันทึกการเปลี่ยนแปลง</button>
    </div>
    </>
  )
}
