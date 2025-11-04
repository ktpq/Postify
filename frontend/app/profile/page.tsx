import React from 'react'
import { redirect } from 'next/navigation'
import UserInformation from './UserInformation'
import UserArticles from './UserArticles'

import { getProfile } from '../getProfile'

import axios from 'axios'

export default async function page() {

    // get Id มาดูว่าเราเป็นใครเเละทำการส่งไปเพื่อ getUser
    const data = await getProfile()
    const userData = data?.userData;
    
    if (!userData){
        redirect('/')
    }
    const userId = userData.id;
    const base_api = process.env.API_URL
    
    // fetching data
    const getUserDetail = async () =>{
        try{
            
            const response = await axios.get(`${base_api}/api/users/${userId}`)
            return response.data
        } catch (error){
            console.log('error', error)
        }
    }

    const user = await getUserDetail();
    const userDetail = user.userData;

    // user article

    const userArticle = await axios.get(`${base_api}/api/posts/user/${userId}`);
    const articles = userArticle.data.data

    const numArticles = articles.length
    

    return (
        <div className='border-main'>
            <section className='mx-50 pt-15 max-xl:mx-20 max-lg:mx-7 '>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent  -black pt-3"> โปรไฟล์ของฉัน</h1>
                <main className=' my-8 grid grid-cols-[4fr_8fr] gap-10 items-start max-lg:grid-cols-1'>
                    

                    {/* grid ช่องซ้าย */}
                    <UserInformation userData={userDetail} num = {numArticles}/>

                    {/* grid ช่องขวา */}
                    <UserArticles articles={articles}/>
                </main>
            </section>
        </div>
    )
}
