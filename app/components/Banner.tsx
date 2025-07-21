import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='banner'>
    <div className="banner-box">
      <h1>
      Building stellar <br /> websites for early <br /> startups
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>

      <div className="banner-btn-box">
        <button className='work'> View our work</button>
        <button className="pricing-btn">
        View Pricing <Image src={'/Arrow.svg'} alt='-->' width={24} height={0} />
        </button>
      </div>
    </div>
      <Image src={'/banner.png'} alt='banner ' width={638} height={361.12}/>
    </div>
  )
}
