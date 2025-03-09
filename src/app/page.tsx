"use client";

import Footer from "@/components/Footer";
import AboutUs from "@/pages/aboutUs-page";
// import AboutUs from "@/pages/aboutUs-page";
import HeroPage from "@/pages/hero-page";
import  Seperation  from "@/pages/seperation";

export default function Home() {
  return (
    <div className="flex flex-col bg-amber-500">
       <HeroPage /> 
         <Seperation />    
        <AboutUs /> {/* Building About Us page */}
        <Footer />
    </div>
  );
}
