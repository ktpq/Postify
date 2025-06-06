import React from 'react'

import Navbar from '@/app/components/Navbar';

interface ParamsProp{
    params: {
        id: number
    }
}



export default function page({params}: ParamsProp) {
  const { id } = params;
  return (
    <>
    <Navbar/>
    <a className='mx-50 mt-10 flex items-center max-lg:mx-7' href='/articles'>
        <img src="../back.png" alt="" width={30}/>
        <p> กลับสู่หน้าบทความ</p>
    </a>
    <section className='bg-white p-8 mx-50 mt-10 rounded-lg shadow-md max-lg:mx-7'>
        <p className='text-white bg-black rounded-3xl mx-auto w-fit px-3 py-0.5 my-3'> เทคโนโลยี </p>
        <h1 className='text-center text-3xl my-5 font-bold'> บทความ {id} </h1>
        
        {/* Attribute ของ โพสต์ */}
        <div className='flex space-x-7 justify-center items-center max-sm:space-x-2'>
            <div className='flex max-sm:flex-col max-sm:space-y-2'> 
                <img src="../person.png" alt="" width={20} className='max-sm:mx-auto'/>
                <p className='ml-3'> John Doe </p>
            </div>
            <div className='flex max-sm:flex-col max-sm:space-y-2'>
                <img src="../calendar.png" alt="" width={20} className='max-sm:mx-auto'/>
                <p className='ml-3'> 2024-01-14 </p>
            </div> 
            <div className='flex max-sm:flex-col max-sm:space-y-2'>
                <img src="../views.png" alt="" width={20} className='max-sm:mx-auto'/>
                <p className='ml-3'> 189 ครั้ง </p>
            </div>
            
        </div>

        <main className='my-10'>
            <p className='my-5'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui officia culpa! Officia ratione numquam ipsam tempora id at obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dignissimos repellat voluptas itaque distinctio! Alias quia obcaecati nisi impedit deleniti, dignissimos quae delectus iste, aspernatur beatae, rem molestias aperiam facilis nam dicta! Magnam odit perferendis illo eum! Quis, ex autem.</p>

            <p className='my-5'> Lorem ipsum dolor sit, hello amet consectetur adipisicing elit. Maxime qui officia culpa! Officia ratione numquam ipsam tempora id at obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dignissimos repellat voluptas itaque distinctio! Alias quia obcaecati nisi impedit deleniti, dignissimos quae delectus iste, aspernatur beatae, rem molestias aperiam facilis nam dicta! Magnam odit perferendis illo eum! Quis, ex autem.</p>

            <p className='my-5'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui officia culpa! Officia ratione numquam ipsam tempora id at obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dignissimos repellat voluptas itaque distinctio! Alias quia obcaecati nisi impedit deleniti, dignissimos quae delectus iste, aspernatur beatae, rem molestias aperiam facilis nam dicta! Magnam odit perferendis illo eum! Quis, ex autem.</p>

            <p className='my-5'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui officia culpa! Officia ratione numquam ipsam tempora id at obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dignissimos repellat voluptas itaque distinctio! Alias quia obcaecati nisi impedit deleniti, dignissimos quae delectus iste, aspernatur beatae, rem molestias aperiam facilis nam dicta! Magnam odit perferendis illo eum! Quis, ex autem.</p>
        </main>

    </section>

    </>
  )
}
