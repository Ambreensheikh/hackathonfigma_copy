import React from 'react'
import Image from 'next/image'
import { topcategories } from '@/app/constant/Topcategory'

const Topcategory=()=> {
  return (
    <>
    <div>

        <h1 className='flex items-center justify-center mt-[79px] text-[#151875] font-bold text-[42px]'>Top Categories</h1>
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  p-4">
              {topcategories.map((Topcategory, index: number) => {
                
              return(
                
              
                <div
                  key={Topcategory.id || index}
                  className=" bg-white shadow-lg rounded-lg p-4 flex flex-col items-center 
                  text-center "
                >
                  <Image
                    src={Topcategory.src}
                    alt={Topcategory.alt}
                    width={Topcategory.width}
                    height={Topcategory.height}
                    className="mb-4"
                  />
                
               </div>
               
               
                 
                  
                 
              )})},
              </div>
              {/* Decorative Section */}
      <div className="max-w-full mt-[20px] overflow-hidden justify-center flex items-center">
        <Image src="/dots.png" alt="Dots" width={71} height={2} />
      </div>

      
      <div className="relative w-full h-[462px] mt-[125px] overflow-hidden">
        <Image
          src="/group1.png"
          alt="hero"
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>

       {/* Footer Section */}
              <div className="flex justify-center mt-10">
                <Image
                  src="/image102.png"
                  alt="Footer Divider"
                  width={904}
                  height={44}
                  className="object-contain"
                />
              </div>
      
      

              
           
  </>
  )
}



export default Topcategory