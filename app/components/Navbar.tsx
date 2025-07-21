// 'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav id='nav'>
      <Image  src='/Logo.svg' alt='{Fanswee' width={122} height={24.71}/>  
      <div className="nav-right">
       
          <Link href={'/'}>Home</Link>
          <Link href={'about-us'}>About us</Link>
          <Link href={'features'}>Features</Link>
          <Link href={'pricing'}>Pricing</Link>
          <Link href={'faq'}>FAQ</Link>
          <Link href={'blog'}>Blog</Link>
        <button className='nav-btn'>Contact us</button>
        
      </div>
    </nav>
  )
}
