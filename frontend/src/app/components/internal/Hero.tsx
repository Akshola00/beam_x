import React from "react";
import ParticleGround from "particleground.ts";
import "marqueee/style.css";
import { Poppins } from "next/font/google";
import Mymarquee from "./Mymarquee";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <div
      className={`relative ${poppins.className} flex h-[100vh] w-[100vw] flex-col items-center justify-evenly overflow-hidden bg-gradient-to-r from-indigo-500 text-2xl`}
    >
      <ParticleGround />
      <br />
      <p>
      ALL ABOUT MEMECOINS ON STARKNET
      </p>
      <Mymarquee />
      <div className="relative grid h-fit w-[95%] grid-cols-1 gap-4 overflow-hidden rounded-xl bg-red-300 p-6 text-black md:grid-cols-2">
        <button
          type="button"
          className="mb-2 me-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
        >
          Launch A Meme Coin
        </button>

        <button
          type="button"
          className="mb-2 me-2 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
        >
          Check Meme Coin
        </button>
      </div>
    </div>
  );
};

export default Hero;
