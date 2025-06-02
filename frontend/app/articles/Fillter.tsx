'use client'
import React from 'react'
import { useState } from 'react'


export default function Fillter() {

  const [ visible, setVisible ] = useState<boolean>(false);

  return (
    <div className='relative'>
        <div className='relative'>
            <button  className='pr-35 py-3 pl-3 bg-white rounded-lg shadow-sm text-gray-600' onClick={() =>{setVisible(!visible)}}> ทั้งหมด </button>
            <img src="./dropdown.png" alt="" width={15} className='absolute right-3.5 top-3.75' onClick={() =>{setVisible(!visible)}}/>
        </div>
        
        <div className={`flex flex-col mt-2 bg-white rounded-sm shadow-sm text-gray-700 absolute w-full transition-all overflow-auto p-2 z-50 ${visible ? 'max-h-60 opacity-100': 'max-h-0 opacity-0'}`}>
            <span className='pl-8 py-2 hover:bg-gray-100'> ทั้งหมด </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> เทคโนโลยี </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> การเขียน </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> ธุรกิจ </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> ไลฟ์สไตล์ </span>
            <span className='pl-8 py-2 hover:bg-gray-100'> การศึกษา</span>
            <span className='pl-8 py-2 hover:bg-gray-100'> สุขภาพ </span>
        </div>
        
    </div>
  )
}
