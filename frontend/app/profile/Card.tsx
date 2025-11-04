'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

interface Props{
    title: string
    desc: string
    status: string
    view: number
    time: string
    id: number
}

export default function Card({id, title, desc, status, view, time}: Props) {
    const [formattedDate, setFormattedDate] = useState<string>("");
    const router = useRouter()
    const dateObj = new Date(time)

    useEffect(() => {
        const dateStr = dateObj.toLocaleDateString("th-TH", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        setFormattedDate(dateStr)
    }, [])

  const deletePost = (id: number) =>{
    Swal.fire({
        title: "คุณต้องการลบบทความนี้?",
        text: "ถ้าลบไปแล้วจะไม่สามารถย้อนกลับมาได้อีก",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก"
        }).then(async (result) => {
        if (result.isConfirmed) {
            const base_api = process.env.NEXT_PUBLIC_API_URL
            await axios.delete(`${base_api}/api/posts/${id}`)
            Swal.fire({
                title: "ลบบทความสำเร็จ",
                icon: "success"
            });
            router.refresh()
        }
        });
  }
 
  return (
     <div className='border border-gray-300 shadow-sm my-4 rounded-lg hover:-translate-y-1.5 hover:shadow-md duration-300'>
        <div className='my-4 px-4 py-2'> 
            <div className='flex justify-between items-center max-sm:flex-col max-sm:space-y-4'>
                <div className='flex items-center space-x-3 max-sm:flex-col max-sm:space-y-2'>
                    <a className='text-xl' > {title} </a>
                    
                        <p className='bg-black text-white px-3 py-0.5 rounded-3xl text-[13px]'> {status} </p>
                    
                    
                </div>
                <div className='flex items-center space-x-3'>
                    {/* <a href="" className='p-1.5 border border-gray-300 rounded-lg'>
                        <img src="../write.png" alt="" width={25}/>
                    </a> */}
                    <button className='p-1.5 border border-gray-300 rounded-lg cursor-pointer' onClick={() => {deletePost(id)}}>
                        <img src="../garbage.png" alt="" width={25}/>
                    </button>
                </div>
            </div>
            <p className='text-gray-600 my-3 max-sm:my-5'> {desc} </p>
            <div className='flex space-x-4'>
                <div className='flex space-x-2 max-sm:flex-1'>
                    <img src="../calendar.png" alt="" width={20}/>
                    <p className='text-gray-600'>{formattedDate}</p>
                </div>
                <p className='text-gray-600'> {view} ครั้งดู</p>
            </div>
        </div>
    </div>
  )
}
