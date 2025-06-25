'use client'
import React from 'react'
import { useState, useEffect } from 'react'

import Fillter from './Fillter'

import ArticleCard from '../components/ArticleCard'

interface user{
    user_username: string
}

interface post{
    post_id:number
    post_title:string
    post_description:string
    post_content:string
    post_createdAt:Date
    post_updatedAt:string
    post_category:string
    post_view:number
    post_status:string
    user: user
    user_id:number
}

interface Props{
    allPost: post[]
}

export default function AllArticles({allPost}: Props) {


    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("ทั้งหมด")
    const [fillterPost, setFillterPost] = useState<post[]>(allPost)

    useEffect(() =>{
        console.log(search)
        console.log(category)

        let currentFilter = allPost;

        if (category !== "ทั้งหมด"){
            currentFilter = currentFilter.filter(post => post.post_category.toLowerCase() === category.toLowerCase())
        }

        if (search !== ""){
            currentFilter = currentFilter.filter(post => post.post_title.toLowerCase().includes(search.toLowerCase()))
        }

        setFillterPost(currentFilter)
       
    }, [search, allPost, category])

    return (
    <section className='mb-30'>

        <div className='flex justify-between items-center max-md:flex-col max-md:space-y-5'>
            <input type="text" className='py-3 px-10 w-[450px] bg-white rounded-lg shadow-sm max-md:w-full font-extrabold' placeholder='ค้นหาบทความ' value={search} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setSearch(event.target.value)}}/>
            <div className='flex items-center space-x-4'>
                <Fillter category={category} setCategory={setCategory}/>
                <p className='text-gray-600'> พบ {fillterPost.length} บทความ </p>
            </div>
        </div>

        <main className='mt-10'>
            <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {/* loop ตรงนี้ */}
                {fillterPost.map((post, index) => (
                    <ArticleCard title={post.post_title} description={post.post_description} author={post.user.user_username} createdAt={post.post_createdAt} category={post.post_category} postId={post.post_id} key={index}/>
                ))}
            </div>
        </main>
    </section>
  )
}
