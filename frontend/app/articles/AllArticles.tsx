import React from 'react'

import Fillter from './Fillter'

import ArticleCard from '../components/ArticleCard'

export default function AllArticles() {

  const articles = ["บทความ 1", "บทความ 2","บทความ 3","บทความ 4","บทความ 5","บทความ 6"]

  return (
    <section className='mb-30'>

        <div className='flex justify-between items-center max-md:flex-col max-md:space-y-5'>
            <input type="text" className='py-3 px-10 w-[450px] bg-white rounded-lg shadow-sm max-md:w-full' placeholder='ค้นหาบทความ'/>
            <div className='flex items-center space-x-4'>
                <Fillter/>
                <p className='text-gray-600'> พบ 8 บทความ </p>
            </div>
        </div>

        <main className='mt-10'>
            <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {articles.map((item,index) => (
                    <ArticleCard cardTitle={item} fakeId={index+1} key={index}/>
                ))}
            </div>
        </main>
    </section>
  )
}
