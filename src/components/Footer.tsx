import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-200 text-white relative">
      <Image src="/image/pepe-d-l.png" alt="logo" width={330} height={330} className="absolute top-20 translate-y-28 left-0" />
      <Image src="/image/pepe-d-r.png" alt="logo" width={450} height={450} className="absolute top-15 right-0 z-10" />
      <div className="flex gap-2 border-8 border-orange-200 px-10 bg-amber-500 rounded-2xl transform translate-y-14">
        <Image
          src="/image/pepebatman.png"
          alt="logo"
          width={230}
          height={230}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl text-center font-bold jaro-regular">
            Batman Loves memes, <br /> Do you?
          </h1>
          <button className="bg-orange-600 rounded-md px-5 py-2 mx-auto mt-4 text-lg hover:bg-orange-700 transition-colors jaro-regular">
            Sign Up Now
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 bg-amber-500 rounded-t-2xl w-full gap-4">
        <h1 className="font-extrabold text-2xl creepster-regular text-white ml-2 mt-16">
          MEME<span className="text-orange-600">VERSE</span>
        </h1>
        <p className="text-center text-lg jaro-regular">
          Join our meme community & become part of the fun! <br />
          Making the internet funnier, one meme at a time! <br />
          Join the meme revolution and unleash your creativity.
        </p>
        <p className="mt-6 jaro-regular">
          © Meme Verse 2025 - Laugh. Create. Share.
        </p>
      </div>
    </div>
  );
};

export default Footer;
