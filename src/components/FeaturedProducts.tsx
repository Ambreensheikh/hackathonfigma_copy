 
import React from 'react';
import Image from 'next/image';

function FeaturedProducts() {
  return (
    <>
      <div className="flex flex-col px-4 sm:px-8">
        {/* Section Heading */}
        <h1 className="text-xl sm:text-3xl font-bold text-center mb-6">
          Featured Products
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <Image
            src="/product1.png"
            alt="Product 1"
            width={270}
            height={361}
            className="w-full h-auto"
          />
          <Image
            src="/product2.png"
            alt="Product 2"
            width={270}
            height={361}
            className="w-full h-auto"
          />
          <Image
            src="/product3.png"
            alt="Product 3"
            width={270}
            height={361}
            className="w-full h-auto"
          />
          <Image
            src="/product4.png"
            alt="Product 4"
            width={270}
            height={361}
            className="w-full h-auto"
          />
        </div>

        {/* Divider */}
        <div className="flex justify-center mt-6">
          <Image
            src="/group.png"
            alt="Divider"
            width={91}
            height={4}
            className="w-[50px] sm:w-[91px] h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
