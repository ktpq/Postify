'use client'
import React from 'react'
import { useState } from 'react'

export default function SelectCategory() {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <section className='relative'>
        <button className='border flex justify-between w-full py-2.5 px-4 mt-2 border-gray-300 rounded-lg' onClick={() =>{setVisible(!visible)}}>
            <p> เลือกหมวดหมู่ </p>
            <img src="../dropdown.png" alt="" width={20}/>
        </button>

        <div className={`flex flex-col mt-2 border border-gray-300 rounded-lg p-2 absolute w-full bg-white overflow-auto transition-all shadow-md ${visible ? 'max-h-60 opacity-100': 'max-h-0 opacity-0'}`}>
            <span className='pl-8 py-2 hover:bg-gray-100'> ทั้งหมด </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> เทคโนโลยี </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> การเขียน </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> ธุรกิจ </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> ไลฟ์สไตล์ </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> การศึกษา</span>
            <span className='pl-8 py-2 hover:bg-gray-100'> สุขภาพ </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> อื่นๆ </span>
        </div>
    </section>
  )
}
