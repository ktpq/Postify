import React from 'react'

import Navbar from '../components/Navbar'

import UserInformation from './UserInformation'
import UserArticles from './UserArticles'

export default function page() {
    return (
        <div className='border-main'>
            <section className='mx-50 pt-15 max-xl:mx-20 max-lg:mx-7 '>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent  -black pt-3"> โปรไฟล์ของฉัน</h1>
                <main className=' my-8 grid grid-cols-[4fr_8fr] gap-10 items-start max-lg:grid-cols-1'>
                    

                    {/* grid ช่องซ้าย */}
                    <UserInformation/>
                    

                    {/* grid ช่องขวา */}
                    <UserArticles/>
                </main>
            </section>
        </div>
    )
}
