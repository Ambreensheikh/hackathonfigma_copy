import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Cards } from '@/app/constant/Card'

function shop() {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-[100%] bg-[#F6F5FF] h-[286px]'>
    <h1 className=' text-[42px] font-bold text-[#151875]'>About Us</h1>
    <span className='flex justify-center items-center mb-[40px]'>
        <p className='flex text-black text-[12px] flex-col justify-center items-center'>Home .</p>
        <p className='text-black text-[12px] flex justify-center items-center'>Pages .</p>
        <p className='text-[#FB2E86] text-[12px] flex justify-center items-center '>About Us</p>
        </span>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[119px] ml-[275px] '>
    <div className="">
      <Image src="/Group 73.png" alt="Image" width={870} height={609} className="object-contain mb-[119px]"/>

    </div>
    <div className='w-[550px] sm:w-[550px] lg:w-[550px]'>
      <h1 className='font-bold text-[42px] text-[#151875]'>Know About Our Ecomerce<br/>Business, History</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptas suscipit hic illum commodi aliquam corporis dolorem nemo laboriosam aut reprehenderit
         nostrum libero labore, impedit saepe? Quis ex velit doloribus fuga? </p>
         <Button className='bg-[#FB2E86] text-white mt-[30px]'>Contact Us</Button>
    </div>
   
    </div>
    <div>
      <h1 className='flex justify-center items-center text-black text-[42px]'>Our Features</h1>
    </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6
       p-4 sm:p-4 lg:p-4 mt-3 ">
          {Cards.map((card, index: number) => {
            
          return(
            
          
            <div
              key={card.id || index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center 
              text-center w-[270px] h-[320px] mt-3 mb-[45px]"
            >
              <Image
                src={card.src}
                alt={card.name}
                width={card.width}
                height={card.height}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
              <p className="text-gray-600">{card.lorem}</p>
            </div>
          )})}
        </div>

        <div className='flex flex-col justify-center items-center w-[100%] bg-[#F6F5FF] h-[386px] sm:h-[386px] lg:h-[386px] '>
          <h1 className='flex justify-center items-center text-black text-[42px] sm:ml-[400px]'>Our Client Say!</h1>
          <Image src="/our1.png" alt="Image" width={689} height={285}/>
        </div>
      
    
    </>
  )
}

export default shop