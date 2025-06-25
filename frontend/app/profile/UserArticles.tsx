import React from 'react'

import Card from './Card'

interface username{
    user_username: string
}

interface data{
    
    "post_id":number,
    "post_title":string,
    "post_description":string,
    "post_content":string,
    "post_createdAt":string,
    "post_updatedAt":string,
    "post_category":string,
    "post_view":number,
    "post_status":string,
    "user_id":number,
    "user": username

}
interface Props{
    articles: data[]
}

export default function UserArticles({articles}: Props) {

  console.log(articles)
  return (
    <section className='bg-white shadow-md rounded-lg p-7'>

        <div className='flex justify-between items-center max-sm:flex-col max-sm:space-y-3'>
            <h2 className='text-2xl'> บทความของฉัน </h2>
            <a className='bg-black text-white px-5 py-2.5 rounded-md shadow-sm hover:scale-105 duration-200 flex space-x-3' href='/create'>
                <img src="../pen.png" alt="" width={25}/>
                <p>เขียนใหม่</p> 
            </a>
        </div>



        <main>
            
        {articles.map((post, index) => (
            <Card id={post.post_id} title={post.post_title} desc = {post.post_description} status = {post.post_status} view={post.post_view} time={post.post_createdAt} key={index}/>
        ))}
        

        </main>

    </section> 
  )
}
