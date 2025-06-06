import React from 'react'

interface Props{
    isOpen:boolean
}

export default function AdminArticles({isOpen}: Props) {
  return (
    <>
    {isOpen ? (
        <section className='shadow-md bg-white border border-gray-100 rounded-lg my-7 p-7'>
            <div className='flex justify-between items-center max-md:flex-col max-md:space-y-4'>
                <div>
                    <h2 className='text-3xl font-bold max-sm:text-2xl'> รายการบทความทั้งหมด </h2>
                    <p className='text-gray-600 mt-3'> จัดการและตรวจสอบบทความในระบบ </p>
                </div>
                <input type="text" className='py-3 px-10 w-[350px] bg-white rounded-lg shadow-sm max-md:w-full' placeholder='ค้นหาบทความ'/>
            </div>
            
            <main className='my-4'>

                <section className='p-5 border border-gray-200 flex justify-between items-center rounded-lg hover:translate-x-1 duration-200 mt-5 max-xl:flex-col max-xl:space-y-4'>

                    <div>
                        <p className='font-bold text-lg max-xl:text-center'> เทคนิคการถ่ายภาพสำหรับมือใหม่ </p>
                        <div className='flex items-center space-x-4 mt-3 max-md:flex-col max-md:space-y-3'>
                            <p className='text-gray-600'> โดย: สมหญิง สวยงาม </p>
                            <p className='text-gray-600'> วันที่: 2024-01-14 </p>
                            <span className='flex items-center space-x-2 text-gray-600'>
                                <img src="../views.png" alt="" width={20}/>
                                 <p> 189 views </p>
                            </span>
                            <span className='border px-3 text-white bg-black rounded-2xl'>
                                เผยแพร่แล้ว 
                            </span>
                        </div>
                    </div>

                    <button className='bg-red-400 text-white py-2 px-5 flex items-center space-x-3 justify-center rounded-lg hover:bg-red-500 duration-200 cursor-pointer'>
                        <img src="../garbage-white.png" alt="" width={20}/>
                        <p> ลบ </p>
                    </button>

                </section>

                <section className='p-5 border border-gray-200 flex justify-between items-center rounded-lg hover:translate-x-1 duration-200 mt-5 max-xl:flex-col max-xl:space-y-4'>

                    <div>
                        <p className='font-bold text-lg max-xl:text-center'> เทคนิคการถ่ายภาพสำหรับมือใหม่ </p>
                        <div className='flex items-center space-x-4 mt-3 max-md:flex-col max-md:space-y-3'>
                            <p className='text-gray-600'> โดย: สมหญิง สวยงาม </p>
                            <p className='text-gray-600'> วันที่: 2024-01-14 </p>
                            <span className='flex items-center space-x-2 text-gray-600'>
                                <img src="../views.png" alt="" width={20}/>
                                 <p> 189 views </p>
                            </span>
                            <span className='px-3 bg-gray-300 rounded-2xl'>
                                ร่าง
                            </span>
                        </div>
                    </div>

                    <button className='bg-red-400 text-white py-2 px-5 flex items-center space-x-3 justify-center rounded-lg hover:bg-red-500 duration-200 cursor-pointer'>
                        <img src="../garbage-white.png" alt="" width={20}/>
                        <p> ลบ </p>
                    </button>

                </section>

                
            </main>
        </section>
    ): null}
    </>
    
  )
}
