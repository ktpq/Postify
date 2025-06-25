'use server'
import React from 'react'
import { redirect, RedirectType } from 'next/navigation'

import CreateForm from './CreateForm'

import { getProfile } from '../getProfile'

export default async function page() {
  
  const data = await getProfile()
  const userData = data?.userData;
  if (!userData){
    redirect('/')
  }
  const userId = userData?.id;
  

  return (
    <>
    <CreateForm userId={userId}/>
    </>
  )
}
