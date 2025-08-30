import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProcessSection from '@/components/ProcessSection'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <ProcessSection/>
      <Footer/>
    </div>
  )
}

export default page
