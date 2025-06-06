import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeHero from "./components/homeComponets/HomeHero";
import HomeWebStat from "./components/homeComponets/HomeWebStat";
import HomeRecommendArticles from "./components/homeComponets/HomeRecommendArticles";
import HomeGetStarted from "./components/homeComponets/HomeGetStarted";

export default function page() {
  return (
    <div className="">
      <Navbar />
      <HomeHero />
      <HomeWebStat />
      <HomeRecommendArticles/>
      <HomeGetStarted/>
      <Footer/>
    </div>
  );
}
