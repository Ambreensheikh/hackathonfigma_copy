

import React from 'react';
import Image from 'next/image';

async function Hero() {
  
  return (
    <>
      <section className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 gap-6 px-4 sm:px-8">
        {/* Left Section */}
        <div className="flex flex-col sm:grid sm:grid-cols-2">
          <Image
            src='/image.png'
            alt="hero"
            className="w-full h-auto"
            width={387}
            height={387}
          />
          <div className="flex flex-col text-sm w-full max-w-sm font-Lato mt-6 sm:mt-12">
            <p className="text-[#FB2E86] font-bold text-xs sm:text-sm mb-3">
              Best Furniture For Your Castle....
            </p>
            <h1 className="text-black font-bold text-xl sm:text-2xl lg:text-5xl">
            New Furniture Collection <br/> Trends in 2020
            </h1>
            <p className="text-[#8A8FB9] text-sm font-medium mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.
            </p>
            <div className="flex">
              <button className="bg-[#FB2E86] text-white text-sm font-bold py-2 px-6 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex justify-center mt-6 sm:mt-0">
          <Image
            src='/promo.png'
            alt="hero"
            className="w-full h-auto"
            width={506}
            height={489}
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
