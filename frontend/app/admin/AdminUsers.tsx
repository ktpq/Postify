import React from 'react'

interface Props{
    isOpen:boolean
}

export default function AdminUsers({isOpen}: Props) {
  return (
    <>
    {isOpen ? (
        <section className='shadow-md bg-white border border-gray-100 rounded-lg my-7 p-7'>
            <div className='flex justify-between items-center max-md:flex-col max-md:space-y-4'>
                <div>
                    <h2 className='text-3xl font-bold max-sm:text-2xl'> รายการผู้ใช้งานทั้งหมด </h2>
                    <p className='text-gray-600 mt-3'> จัดการและตรวจสอบผู้ใช้งานในระบบ </p>
                </div>
                <input type="text" className='py-3 px-10 w-[350px] bg-white rounded-lg shadow-sm max-md:w-full' placeholder='ค้นหาผู้ใช้'/>
            </div>
            
            <main className='my-4'>

                <section className='p-5 border border-gray-200 flex justify-between items-center rounded-lg hover:translate-x-1 duration-200 mt-5 max-xl:flex-col max-xl:space-y-4'>

                    <div>
                        <p className='font-bold text-lg max-xl:text-center'> สมชาย ใจดี </p>
                        <div className='flex items-center space-x-4 mt-3 max-md:flex-col max-md:space-y-3'>
                            <p className='text-gray-600'> somchai@example.com </p>
                            <p className='text-gray-600'> เข้าร่วม: 2024-01-14 </p>
                            <span className='flex items-center space-x-2 text-gray-600'>
                                
                                 <p> บทความ: 12 บทความ </p>
                            </span>
                            <span className='border px-3 text-white bg-black rounded-2xl'>
                                ใช้งานได้
                            </span>
                        </div>
                    </div>

                    <button className='bg-red-400 text-white py-2 px-7 flex items-center space-x-3 justify-center rounded-lg hover:bg-red-500 duration-200 cursor-pointer'>
                        
                        <p> แบน </p>
                    </button>

                </section>

                <section className='p-5 border border-gray-200 flex justify-between items-center rounded-lg hover:translate-x-1 duration-200 mt-5 max-xl:flex-col max-xl:space-y-4'>

                    <div>
                        <p className='font-bold text-lg max-xl:text-center'> สมชาย ใจดี </p>
                        <div className='flex items-center space-x-4 mt-3 max-md:flex-col max-md:space-y-3'>
                            <p className='text-gray-600'> somchai@example.com </p>
                            <p className='text-gray-600'> เข้าร่วม: 2024-01-14 </p>
                            <span className='flex items-center space-x-2 text-gray-600'>
                                
                                 <p> บทความ: 12 บทความ </p>
                            </span>
                            <span className='border px-3 text-white bg-red-400 rounded-2xl'>
                                ถูกแบน
                            </span>
                        </div>
                    </div>

                    <button className='bg-black text-white py-2 px-5 flex items-center space-x-3 justify-center rounded-lg cursor-pointer'>
                        
                        <p> ยกเลิกการแบน </p>
                    </button>

                </section>

                

                
            </main>
        </section>
        

        
    ): null}
    </>
    
  )
}
