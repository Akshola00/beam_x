import React from "react";
import { useEffect } from "react";

import ParticleGround from "particleground.ts";
import { initMarqueeeSlider, MarqueeSliderOptions } from "marqueee";
import "marqueee/style.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const Hero = () => {
  useEffect(() => {
    initMarqueeeSlider("marquee-slider"); // takes the marqee parent id.
  }, []);
  return (
    <div
      className={`relative ${poppins.className} flex h-[100vh] w-[100vw] flex-col items-center justify-evenly overflow-hidden bg-blue-100 text-2xl`}
    >
      <ParticleGround />
      ALL ABOUT MEMECOINS ON STARKNET
      <div id="marquee-slider" data-speed="20" data-space="100">
        <div className="marquee-slider-wrapper">
          <div className="marquee-slider-slides-wrapper gap- flex">
            <div className="marquee-slider-slide">starknet</div>
            <div className="marquee-slider-slide">brother</div>
            <div className="marquee-slider-slide">dodge</div>
            <div className="marquee-slider-slide">flippyflop</div>
            <div className="marquee-slider-slide">brianai</div>
          </div>
        </div>
      </div>
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
