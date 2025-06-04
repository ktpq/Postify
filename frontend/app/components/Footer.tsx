import React from 'react'

import WebLogo from './WebLogo'

export default function Footer() {

  const today:Date = new Date();
  const currentYear:number = today.getFullYear();

  return (
    <section className='bg-[#111828] text-white'>
        <div className='mx-50 pb-12 border-b border-[#868383] max-md:mx-7'>
            
            <div className='grid grid-cols-4 gap-20 pt-15 max-md:grid-cols-2'>
                <div>
                    <div  className='flex items-center'>
                        <WebLogo/>
                        <h2 className='text-[20px] ml-3 font-extrabold '> Postify </h2>
                    </div>

                    <p className='mt-5 text-[#c4c4c4]'> แพลตฟอร์มบล็อกภาษาไทยที่ให้คุณแบ่งปันและเรียนรู้ไปด้วยกัน </p>
                    
                </div>

                <div>
                    <h2 className='text-[18px] font-bold'> เมนูหลัก </h2>
                    <div className='flex flex-col justify-start items-start mt-2 space-y-3 pt-5 text-[#c4c4c4]'>
                        <a href="" className='hover:text-white duration-200'>หน้าแรก</a>
                        <a href="" className='hover:text-white duration-200'>บทความ</a>
                        <a href="" className='hover:text-white duration-200'>หมวดหมู่</a>
                        <a href="" className='hover:text-white duration-200'>นักเขียน</a>
                    </div>
                </div>

                <div>
                    <h2 className='text-[18px] font-bold'> เมนูหลัก </h2>
                    <div className='flex flex-col justify-start items-start mt-2 space-y-3 pt-5 text-[#c4c4c4]'>
                        <a href="" className='hover:text-white duration-200'>หน้าแรก</a>
                        <a href="" className='hover:text-white duration-200'>บทความ</a>
                        <a href="" className='hover:text-white duration-200'>หมวดหมู่</a>
                        <a href="" className='hover:text-white duration-200'>นักเขียน</a>
                    </div>
                </div>

                <div>
                    <h2 className='text-[18px] font-bold'> เมนูหลัก </h2>
                    <div className='flex flex-col justify-start items-start mt-2 space-y-3 pt-5 text-[#c4c4c4]'>
                        <a href="" className='hover:text-white duration-200'>หน้าแรก</a>
                        <a href="" className='hover:text-white duration-200'>บทความ</a>
                        <a href="" className='hover:text-white duration-200'>หมวดหมู่</a>
                        <a href="" className='hover:text-white duration-200'>นักเขียน</a>
                    </div>
                </div>

                
                
            </div>

            
        </div>
        <p className='text-center mt-15 pb-10 text-[#c4c4c4]'> © {currentYear} Postify. สงวนลิขสิทธิ์ทุกประการ </p>
    </section>
  )
}
