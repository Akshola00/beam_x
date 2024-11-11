import React from "react";
import Image from "next/image";
import { initMarqueeeSlider, MarqueeSliderOptions } from "marqueee";
import { useEffect } from "react";

import starklogo from "../../../../public/starknetlogo.svg";
import brian from "../../../../public/assets/brianlogo.png";
import flippy from "../../../../public/assets/flippy.png";
import dodge from "../../../../public/assets/dodge.jpeg";
import ethereum from "../../../../public/assets/ethereum.png";

const Mymarquee = () => {
  useEffect(() => {
    initMarqueeeSlider("marquee-slider"); // takes the marqee parent id.
  }, []);
  return (
    <div id="marquee-slider" data-speed="20" data-space="100">
      <div className="marquee-slider-wrapper">
        <div className="marquee-slider-slides-wrapper gap- flex">
          <div className="marquee-slider-slide">
            <Image
              src={starklogo.src}
              width={200}
              height={200}
              alt="stark logo"
            />
          </div>
          <div className="marquee-slider-slide">
            <Image src={brian.src} width={200} height={200} alt="stark logo" />
          </div>
          <div className="marquee-slider-slide">
            <Image
              src={ethereum.src}
              width={200}
              height={200}
              alt="stark logo"
            />
          </div>
          <div className="marquee-slider-slide">
            <Image src={flippy.src} width={200} height={200} alt="stark logo" />
          </div>
          <div className="marquee-slider-slide h-[200px] w-[200px] overflow-hidden rounded-full">
            <Image src={dodge.src} width={200} height={200} alt="stark logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mymarquee;
