'use server'
import React from 'react'

import Navbar from '../components/Navbar'
import WebLogo from '../components/WebLogo'
import Footer from '../components/Footer'

import AllArticles from './AllArticles'

import axios from 'axios'

export default async function page() {

  const base_api = process.env.API_URL
  const response = await axios.get(`${base_api}/api/posts`);
  const allPost = response.data.allPost;
  

  return (
    <>
    <section className='mx-50 pt-15 max-xl:mx-20 max-lg:mx-7 '>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pt-3"> บทความทั้งหมด </h1>
        <section className='my-8 min-h-screen'>
            <AllArticles allPost={allPost}/>
        </section>
    </section>
    <Footer/>
    </>
  )
}
