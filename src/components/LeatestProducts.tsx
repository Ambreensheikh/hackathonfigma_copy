{/*import React from 'react'
import Image from 'next/image'

function LeatestProducts() {
  return (
    <>
        <h1 className='flex items-center justify-center line-height-[50px] 
        text-[42px] font-bold text-[#151875]'>Leatest Products</h1>
        <span className='flex gap-[58px] justify-center font-[400]'>
        <p className='flex items-center justify-center text-[#FB4997] text-[18px]'>New Arrival</p>
        <p className='flex items-center justify-center text-[#151875] text-[18px] '>Best Seller</p>
        <p className='flex items-center justify-center text-[#151875] text-[18px]'>Featured</p>
        <p className='flex items-center justify-center text-[#151875] text-[18px]'>Special Offer</p>
        </span>
          <div className='flex flex-col mt-[71px] gap-y-[120px]'>
        <div className='flex gap-[29px] m-auto'>
        <Image src="/lp1.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp2.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp3.png" alt="image" width={360} height={306}></Image>
        
        </div>
        <div className='flex gap-[29px] m-auto'>
        <Image src="/lp4.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp5.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp6.png" alt="image" width={360} height={306}></Image>
        </div>
        </div>
       
    </>
  )
}

export default LeatestProducts*/}
import React from 'react';
import Image from 'next/image';

function LeatestProducts() {
  return (
    <>
      {/* Heading */}
      <h1 className="flex items-center justify-center text-lg sm:text-3xl font-bold text-[#151875] mb-6">
        Leatest Products
      </h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-medium mb-8">
        <p className="text-[#FB4997]">New Arrival</p>
        <p className="text-[#151875]">Best Seller</p>
        <p className="text-[#151875]">Featured</p>
        <p className="text-[#151875]">Special Offer</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
        {/* First Row */}
        <Image
          src="/lp1.png"
          alt="Product 1"
          width={360}
          height={306}
          className="w-full h-auto"
        />
        <Image
          src="/lp2.png"
          alt="Product 2"
          width={360}
          height={306}
          className="w-full h-auto"
        />
        <Image
          src="/lp3.png"
          alt="Product 3"
          width={360}
          height={306}
          className="w-full h-auto"
        />

        {/* Second Row */}
        <Image
          src="/lp4.png"
          alt="Product 4"
          width={360}
          height={306}
          className="w-full h-auto"
        />
        <Image
          src="/lp5.png"
          alt="Product 5"
          width={360}
          height={306}
          className="w-full h-auto"
        />
        <Image
          src="/lp6.png"
          alt="Product 6"
          width={360}
          height={306}
          className="w-full h-auto"
        />
      </div>
    </>
  );
}

export default LeatestProducts;
