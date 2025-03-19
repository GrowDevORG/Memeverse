"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const HeroPage = () => {

  return (
    <section className="flex flex-col">
    <Navbar  />
    <div className="flex flex-wrap justify-center items-center min-h-full px-4 md:px-8 py-10 relative  ">

      <div className=" w-full sm:w-3/4 md:w-1/2 flex justify-center">
        <Image
          src="/image/hero-image-memeverse.png"
          width={600}
          height={500}
          alt="hero-image"
          className="w-full max-w-[600px] h-auto"
        />
      </div>
  

      <div className="flex flex-col justify-center items-center relative text-center w-full sm:w-3/4 md:w-1/2 mt-8 md:mt-2">
        <Image
          src="/image/hero-image-bg-memeverse.png"
          width={600}
          height={500}
          alt="logo"
          className="z-0 absolute w-[250px] sm:w-[250px] md:w-[300px] h-auto mt-2"
        />
        <div className="flex flex-col justify-center items-center z-10 px-4">
          <h1 className="text-3xl sm:text-3xl md:text-6xl font-bold creepster-regular text-white">
            Create, Share & Go Viral!
          </h1>
          <p className="text-sm sm:text-base md:text-2xl text-center py-4 text-white jaro-regular">
            Unleash your creativity with our easy-to-use meme <br className="hidden md:block" />
            generator. Make memes, share laughs, <br className="hidden md:block" />
            and become an internet sensation!
          </p>
          <button
            className="bg-orange-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-md jaro-regular text-sm sm:text-base cursor-pointer"
            onClick={() => redirect("/meme-upload")}
          >
            Create Memes
          </button>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default HeroPage;
