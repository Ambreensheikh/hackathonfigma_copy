import Card from '@/components/Card'
import Discount from '@/components/Discount'
import FeaturedProducts from '@/components/FeaturedProducts'
import Hero from '@/components/Hero'
import LeatestProducts from '@/components/LeatestProducts'
import Topcategory from '@/components/Topcategory'
import TrendingProducts from '@/components/TrendingProducts'
import Unique from '@/components/Unique'
import React from 'react'


function Home() {
  return (
    <>
    
    <Hero />
    <FeaturedProducts />
    <LeatestProducts />
    <Card />
   <Unique />
   <TrendingProducts />
   <Discount />
   <Topcategory />

   
    </>
  )
}

export default Home