import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeHero from "./components/homeComponets/HomeHero";
import HomeWebStat from "./components/homeComponets/HomeWebStat";
import HomeRecommendArticles from "./components/homeComponets/HomeRecommendArticles";
import HomeGetStarted from "./components/homeComponets/HomeGetStarted";

import { getProfile } from "./getProfile";

import axios from "axios";

export default async function page() {
  const base_api = process.env.NEXT_PUBLIC_API_URL
  // recommendPost
  const recommendResponse = await axios.get(`${base_api}/api/posts/recommend`);
  const recommendPost = recommendResponse.data.recommendPost

  const allPostCountResponse = await axios.get(`${base_api}/api/posts/count`);
  const allPostCount = allPostCountResponse.data.postCount;
  
  const allUserResponse = await axios.get(`${base_api}/api/users/count-unbanned`);
  const allUser = allUserResponse.data.countUnbanned;
  
  const postTodayResponse = await axios.get(`${base_api}/api/posts/today`);
  const postToday = postTodayResponse.data.postToday

  const allPostViewResponse = await axios.get(`${base_api}/api/posts/view`);
  const allPostView = allPostViewResponse.data.allPostView._sum.post_view;
  
  const data = await getProfile()
  const userData = data.userData
  

  console.log(new Date())

  return (
    <div className="">
      <HomeHero userData={userData}/>
      <HomeWebStat postCount={allPostCount} allUser={allUser} postToday={postToday} allPostView={allPostView}/>
      <HomeRecommendArticles recommendPost={recommendPost} />
      <HomeGetStarted userData={userData}/>
      {/* <Footer /> */}
    </div>
  );
}
