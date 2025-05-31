import React from 'react'

import ArticleCard from '../ArticleCard'

export default function HomeRecommendArticles() {
  return (
    <section className='mt-30 mx-50'>
        <h3 className='text-[30px] text-[#222b38] font-bold text-center'> บทความแนะนำ </h3>
        <p className='text-[#222b38] text-center mt-5'> บทความยอดนิยมและน่าสนใจที่คัดสรรมาเป็นพิเศษ </p>

        <div className='grid grid-cols-3 gap-10 mt-16'>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            
        </div>
        
        <div className='flex justify-center mt-15'>
            <button className="border border-gray-300 px-6 py-3 rounded-lg text-[16px] hover:scale-105 hover:bg-gray-100 duration-300 bg-white cursor-pointer"> ดูบทความทั้งหมด </button>
        </div>
        
    </section>
  )
}
