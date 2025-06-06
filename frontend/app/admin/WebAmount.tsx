import React from 'react'

export default function WebAmount() {
  return (
    <div className='grid grid-cols-3 my-7 gap-7 max-md:grid-cols-1'>

        <div className='shadow-md border-gray-100 border px-5 py-8 rounded-lg bg-white hover:-translate-y-1 duration-300 hover:shadow-lg'>
            <h3> บทความทั้งหมด </h3>
            <p className='text-2xl mt-3 text-blue-400 font-bold'> 48 </p>
        </div>

        <div className='shadow-md border-gray-100 border px-5 py-8 rounded-lg bg-white hover:-translate-y-1 duration-300 hover:shadow-lg'>
            <h3> ผู้ใช้งานทั้งหมด </h3>
            <p className='text-2xl mt-3 text-green-400 font-bold'> 25 </p>
        </div>

        <div className='shadow-md border-gray-100 border px-5 py-8 rounded-lg bg-white hover:-translate-y-1 duration-300 hover:shadow-lg'>
            <h3> ผู้ใช้ที่ถูกแบน </h3>
            <p className='text-2xl mt-3 text-red-400 font-bold'> 3 </p>
        </div>

    </div>
  )
}
