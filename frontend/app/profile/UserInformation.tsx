import React from 'react'

interface data{
    user_username: string
    user_email: string
    user_createdAt: string
}

interface Props{
    userData: data
}

export default function UserInformation({userData}: Props) {

  const dateLong = userData.user_createdAt;
  const date = dateLong.slice(0,10)

  return (
    <div className='bg-white shadow-md rounded-lg p-7'>
        <div className='flex flex-col items-center'>
            <div className="avatar mt-3">
                <div className="ring-primary ring-offset-base-100 w-26 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div> 
            <h2 className='text-[30px] text-center mt-3'> {userData.user_username} </h2>
            <p className='text-gray-600'> {userData.user_email} </p>
        </div>
        
        <div className='flex justify-between items-center mt-7'>
            <p className='text-gray-600'> เข้าร่วมเมื่อ: </p>
            <p> {date} </p>
        </div>

        <div className='flex justify-between items-center mt-4 '>
            <p className='text-gray-600'> บทความทั้งหมด </p>
            <p> FAKE 3 บทความ </p>
        </div>
        <a className='flex text-center border py-2 mt-5 border-gray-300 w-full justify-center space-x-2 rounded-lg shadow-sm hover:scale-105 duration-200 cursor-pointer' href='/edit-profile'>
            <img src="../write.png" alt="" width={25}/>
            <p>แก้ไขโปรไฟล์ </p>
        </a>
    </div> 
  )
}
