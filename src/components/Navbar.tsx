"use client";
import React, { useState } from "react";
import {   UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from "next/image";
//import { useRouter } from "next/router";
 import { useRouter } from 'next/navigation';
import useFetchUser from "@/hooks/useFetchUser";
import { Skeleton } from "./ui/skeleton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

   // const { isSignedIn } = useUser();
    const router = useRouter();

    const {isAuthenticated, isPending} = useFetchUser();

   

  return (
     <nav className="flex justify-between items-center p-4 ">
      <div className="font-extrabold text-2xl creepster-regular text-white ml-2">
        MEME<span className="text-orange-600">VERSE</span>
      </div>

      {/* desktop display */}
      <div className="hidden md:flex items-center space-x-4 gap-4">
        <ul className="flex space-x-8 text-lg font-bold cursor-pointer jaro-regular ">
          <li className="text-white jaro-regular"><Link href="/meme-upload">Create Memes</Link></li>
          <li className="text-white jaro-regular"><Link href="/explorer-page">Explore</Link></li>
          <li className="text-white jaro-regular"><Link href="/about-us">About us</Link></li>
          <li className="text-white jaro-regular"><Link href="/">Leaderboard</Link></li>
        </ul>
        {isAuthenticated ? (
          <UserButton />
        ) : (
          isPending ? <Skeleton className="h-12 w-12 rounded-full" /> :
          <button
            onClick={() => router.push("/auth/sign-in")}
            className="bg-orange-600 rounded-md text-white px-3 py-1 cursor-pointer jaro-regular"
          >
            Sign in
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image
            src={"/svgs/hamburger.svg"} // Replace with your three-bars icon
            width={30}
            height={30}
            alt="Menu"
          />
        </button>
      </div>

      {/*for sm (phone)*/}
      
      {menuOpen && (
        <div className="absolute top-16 right-4 z-10 bg-[#FF9900] w-48 p-4 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col space-y-3 text-lg font-bold cursor-pointer jaro-regular">
            <li><Link href="/meme-upload" className="text-white jaro-regular">Create Memes</Link></li>
            <li><Link href="/explorer-page" className="text-white jaro-regular">Explore</Link></li>
            <li><Link href="/about-us" className="text-white jaro-regular">About us</Link></li>
            <li><Link href="/" className="text-white jaro-regular">Leaderboard</Link></li>
          </ul>
          {isAuthenticated ? (
          <UserButton />
        ) : (
          isPending ? <Skeleton className="h-12 w-12 rounded-full" /> :
          <button
            onClick={() => router.push("/auth/sign-in")}
            className="bg-orange-600 rounded-md text-white px-3 py-1 cursor-pointer jaro-regular"
          >
            Sign in
          </button>
        )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
