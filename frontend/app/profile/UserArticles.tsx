import React from 'react'

export default function UserArticles() {
  return (
    <section className='bg-white shadow-md rounded-lg p-7'>

        <div className='flex justify-between items-center max-sm:flex-col max-sm:space-y-3'>
            <h2 className='text-2xl'> บทความของฉัน </h2>
            <a className='bg-black text-white px-5 py-2.5 rounded-md shadow-sm hover:scale-105 duration-200 flex space-x-3'>
                <img src="../pen.png" alt="" width={25}/>
                <p>เขียนใหม่</p> 
            </a>
        </div>



        <main>
            
            <div className='border border-gray-300 shadow-sm my-4 rounded-lg hover:-translate-y-1.5 hover:shadow-md duration-300'>
                <div className='my-4 px-4 py-2'> 
                    <div className='flex justify-between items-center max-sm:flex-col max-sm:space-y-4'>
                        <div className='flex items-center space-x-3 max-sm:flex-col max-sm:space-y-2'>
                            <h3 className='text-xl'> บทความแรกของฉัน </h3>
                            <p className='bg-black text-white px-3 py-0.5 rounded-3xl text-[13px]'> เผยแพร่แล้ว </p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <a href="" className='p-1.5 border border-gray-300 rounded-lg'>
                                <img src="../write.png" alt="" width={25}/>
                            </a>
                            <button className='p-1.5 border border-gray-300 rounded-lg cursor-pointer'>
                                <img src="../garbage.png" alt="" width={25}/>
                            </button>
                        </div>
                    </div>
                    <p className='text-gray-600 my-3 max-sm:my-5'> นี่คือบทความแรที่ฉันเขียนบนแพลตฟอร์มนี้ </p>
                    <div className='flex space-x-4'>
                        <div className='flex space-x-2 max-sm:flex-1'>
                            <img src="../calendar.png" alt="" width={20}/>
                            <p className='text-gray-600'>2025-05-04</p>
                        </div>
                        <p className='text-gray-600'> 156 ครั้งดู</p>
                    </div>
                </div>
            </div>

            <div className='border border-gray-300 shadow-sm my-4 rounded-lg hover:-translate-y-1.5 hover:shadow-md duration-300'>
                <div className='my-4 px-4 py-2'> 
                    <div className='flex justify-between items-center max-sm:flex-col max-sm:space-y-4'>
                        <div className='flex items-center space-x-3 max-sm:flex-col max-sm:space-y-2'>
                            <h3 className='text-xl'> บทความแรกของฉัน </h3>
                            <p className='bg-black text-white px-3 py-0.5 rounded-3xl text-[13px]'> เผยแพร่แล้ว </p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <a href="" className='p-1.5 border border-gray-300 rounded-lg'>
                                <img src="../write.png" alt="" width={25}/>
                            </a>
                            <button className='p-1.5 border border-gray-300 rounded-lg cursor-pointer'>
                                <img src="../garbage.png" alt="" width={25}/>
                            </button>
                        </div>
                    </div>
                    <p className='text-gray-600 my-3 max-sm:my-5'> นี่คือบทความแรที่ฉันเขียนบนแพลตฟอร์มนี้ </p>
                    <div className='flex space-x-4'>
                        <div className='flex space-x-2 max-sm:flex-1'>
                            <img src="../calendar.png" alt="" width={20}/>
                            <p className='text-gray-600'>2025-05-04</p>
                        </div>
                        <p className='text-gray-600'> 156 ครั้งดู</p>
                    </div>
                </div>
            </div>

            <div className='border border-gray-300 shadow-sm my-4 rounded-lg hover:-translate-y-1.5 hover:shadow-md duration-300'>
                <div className='my-4 px-4 py-2'> 
                    <div className='flex justify-between items-center max-sm:flex-col max-sm:space-y-4'>
                        <div className='flex items-center space-x-3 max-sm:flex-col max-sm:space-y-2'>
                            <h3 className='text-xl'> บทความแรกของฉัน </h3>
                            <p className='bg-black text-white px-3 py-0.5 rounded-3xl text-[13px]'> เผยแพร่แล้ว </p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <a href="" className='p-1.5 border border-gray-300 rounded-lg'>
                                <img src="../write.png" alt="" width={25}/>
                            </a>
                            <button className='p-1.5 border border-gray-300 rounded-lg cursor-pointer'>
                                <img src="../garbage.png" alt="" width={25}/>
                            </button>
                        </div>
                    </div>
                    <p className='text-gray-600 my-3 max-sm:my-5'> นี่คือบทความแรที่ฉันเขียนบนแพลตฟอร์มนี้ </p>
                    <div className='flex space-x-4'>
                        <div className='flex space-x-2 max-sm:flex-1'>
                            <img src="../calendar.png" alt="" width={20}/>
                            <p className='text-gray-600'>2025-05-04</p>
                        </div>
                        <p className='text-gray-600'> 156 ครั้งดู</p>
                    </div>
                </div>
            </div>

        </main>

    </section> 
  )
}
