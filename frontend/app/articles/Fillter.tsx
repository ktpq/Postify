'use client'
import React from 'react'
import { useState } from 'react'

interface Props{
  category: string
  setCategory:React.Dispatch<React.SetStateAction<string>>;
}


export default function Fillter({category, setCategory}: Props) {

  const [ visible, setVisible ] = useState<boolean>(false);

  const handleSelect = (value:string) =>{
    setCategory(value);
    setVisible(false)
  }

  return (
    <div className='relative'>
        <div className='relative'>
            <button  className='pr-35 py-3 pl-3 bg-white rounded-lg shadow-sm text-gray-600 cursor-pointer' onClick={() =>{setVisible(!visible)}}> {category} </button>
            <img src="./dropdown.png" alt="" width={15} className='absolute right-3.5 top-3.75' onClick={() =>{setVisible(!visible)}}/>
        </div>
        
        <div className={`flex flex-col mt-2 bg-white rounded-sm shadow-sm text-gray-700 absolute w-full transition-all overflow-auto p-2 z-50 ${visible ? 'max-h-60 opacity-100': 'max-h-0 opacity-0'}`}>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("ทั้งหมด")}> ทั้งหมด </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("ข่าวสาร")}> ข่าวสาร </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("ไลฟ์สไตล์")}> ไลฟ์สไตล์ </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("เทคโนโลยี")}> เทคโนโลยี </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("สุขภาพ")}> สุขภาพ </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("การเงิน")}> การเงิน </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("การศึกษา")}> การศึกษา </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("งานและอาชีพ")}> งานและอาชีพ </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("บันเทิง")}> บันเทิง </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("บทวิเคราะห์")}> บทวิเคราะห์ </span>
            <span className='pl-8 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleSelect("คู่มือ/How-to")}> คู่มือ/How-to </span>
        </div>
        
    </div>
  )
}
