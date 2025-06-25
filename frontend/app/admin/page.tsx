'use client'
import React from 'react'
import { useState } from 'react'

import Navbar from '../components/Navbar'

import WebAmount from './WebAmount'
import AdminArticles from './AdminArticles'
import AdminUsers from './AdminUsers'

export default function page() {

  const [articleIsOpen, setArticleIsOpen] = useState<boolean>(true);
  const [userIsOpen, setUserIsOpen] = useState<boolean>(false);
  
  const changePage = (text:string) =>{
    if (text === "article"){
        setArticleIsOpen(true);
        setUserIsOpen(false)
    } else {
        setArticleIsOpen(false);
        setUserIsOpen(true)
    }
}


  return (
    <>
    <section className='mx-50 max-lg:mx-7 max-sm:mx-3 p-5'>
        <h1 className='text-3xl mt-5 font-bold'> แดชบอร์ดผู้ดูแลระบบ </h1>
        <h2 className='mt-3 text-gray-600'> จัดการบทความและผู้ใช้งานในระบบ </h2>

        <WebAmount/>
        <div className='w-fit py-1 bg-white rounded-lg'>
            <button className={`px-4 py-2 mx-1 rounded-lg bg-white cursor-pointer ${articleIsOpen ? 'text-black border border-gray-200': 'text-gray-500'}`} onClick={() => {changePage("article")}}> จัดการบทความ </button>
            <button className={`px-4 py-2 mx-1 rounded-lg bg-white cursor-pointer ${userIsOpen ? 'text-black border border-gray-200': 'text-gray-500'}`} onClick={() => {changePage("user")}}> จัดการผู้ใช้ </button>
        </div>

        <AdminArticles isOpen={articleIsOpen}/>
        <AdminUsers isOpen={userIsOpen}/>

    </section>
    </>
  )
}
