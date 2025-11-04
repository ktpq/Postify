
import { cookies } from "next/headers";

import axios from "axios";

export const getProfile = async () =>{
  try{
    const base_api = process.env.API_URL
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    const response = await axios.get(`${base_api}/api/getProfile`, {
      headers: {
        Cookie: cookieString
      }
    });
    return response.data
  } catch (error){
    console.log('error', error)
    return null
  }
} 