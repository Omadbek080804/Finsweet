import React from 'react'

import Banner from '@/app/components/Banner'
import AboutUs from '@/app/components/AboutUs'
import Projects from '@/app/components/Projects'
import Features from '@/app/components/Features'

export default function page() {
  return (
    <div >
      <Banner/>
     <AboutUs/>
     <Projects/>
     <Features/>
    </div>
  )
}
