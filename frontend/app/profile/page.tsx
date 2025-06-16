import React from 'react'

import UserInformation from './UserInformation'
import UserArticles from './UserArticles'

import { getProfile } from '../getProfile'

import axios from 'axios'

export default async function page() {

    // get Id มาดูว่าเราเป็นใครเเละทำการส่งไปเพื่อ getUser
    const data = await getProfile()
    const userData = data.userData;
    const userId = userData.id;
    
    // fetching data
    const getUserDetail = async () =>{
        try{
            const base_api = process.env.NEXT_PUBLIC_API_URL
            const response = await axios.get(`${base_api}/api/users/${userId}`)
            return response.data
        } catch (error){
            console.log('error', error)
        }
    }

    const user = await getUserDetail();
    const userDetail = user.userData;

    return (
        <div className='border-main'>
            <section className='mx-50 pt-15 max-xl:mx-20 max-lg:mx-7 '>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent  -black pt-3"> โปรไฟล์ของฉัน</h1>
                <main className=' my-8 grid grid-cols-[4fr_8fr] gap-10 items-start max-lg:grid-cols-1'>
                    

                    {/* grid ช่องซ้าย */}
                    <UserInformation userData={userDetail}/>

                    {/* grid ช่องขวา */}
                    <UserArticles/>
                </main>
            </section>
        </div>
    )
}
