'use client'
import React from 'react'
import { useState } from 'react'

interface Props{
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectCategory({category, setCategory}: Props) {
  const [visible, setVisible] = useState<boolean>(false)

  const handleSelect = (text:string) =>{
    setCategory(text)
    setVisible(false)
  }

  return (
    <section className='relative'>
        <button className='border flex justify-between w-full py-2.5 px-4 mt-2 border-gray-300 rounded-lg' onClick={() =>{setVisible(!visible)}}>
            <p> { category } </p>
            <img src="../dropdown.png" alt="" width={20}/>
        </button>

        <div className={`flex flex-col mt-2 border border-gray-300 rounded-lg p-2 absolute w-full bg-white overflow-auto transition-all shadow-md ${visible ? 'max-h-60 opacity-100': 'max-h-0 opacity-0 pointer-events-none'}`}>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("ข่าวสาร")}> ข่าวสาร </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("ไลฟ์สไตล์")}> ไลฟ์สไตล์ </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("เทคโนโลยี")}> เทคโนโลยี </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("สุขภาพ")}> สุขภาพ </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("การเงิน")}> การเงิน </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("การศึกษา")}> การศึกษา </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("งานและอาชีพ")}> งานและอาชีพ </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("บันเทิง")}> บันเทิง </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("บทวิเคราะห์")}> บทวิเคราะห์ </span>
            <span className='pl-8 py-2 hover:bg-gray-100' onClick={() => handleSelect("คู่มือ/How-to")}> คู่มือ/How-to </span>
        </div>
    </section>
  )
}
