'use client'
import React from 'react'

import ArticleCard from '../ArticleCard'

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
  recommendPost: post[]
}

export default function HomeRecommendArticles({recommendPost}: Props) {

  console.log('client', recommendPost)
  return (
    <section className='mt-30 mx-50 max-lg:mx-7'>
        <h3 className='text-[30px] text-[#222b38] font-bold text-center'> บทความแนะนำ </h3>
        <p className='text-[#222b38] text-center mt-5'> บทความยอดนิยมและน่าสนใจที่คัดสรรมาเป็นพิเศษ </p>

        <div className='grid grid-cols-3 gap-10 mt-16 max-md:grid-cols-1'>
          
            {/* {articles.map((item, index) => (
              <ArticleCard cardTitle={item} fakeId={index+1} key={index}/>
            ))} */}

            {recommendPost.map((post, index) => (
                  <ArticleCard title={post.post_title} description={post.post_description} author={post.user.user_username} createdAt={post.post_createdAt} category={post.post_category} postId={post.post_id} key={index}/>
            ))}
            
        </div>
        
        <div className='flex justify-center mt-15'>
            <button className="border border-gray-300 px-6 py-3 rounded-lg text-[16px] hover:scale-105 hover:bg-gray-100 duration-300 bg-white cursor-pointer"> ดูบทความทั้งหมด </button>
        </div>
        
    </section>
  )
}
