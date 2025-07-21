import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <div className='about-us'>
            <div className="about-left">
                <h1>How we work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
                <button className="about-btn">
                    Get in touch with us        <Image className='blue' src={'/arrowblue.svg'} alt='-->' width={24} height={0} />
                </button>
            </div>
            <div className="about-right">
                <div className="about-left-card">
                    <Image src={'/pointer1.svg'} alt='1' width={50} height={50} />
                    <h1>
                        Strategy
                    </h1>
                    <p>
                        Euismod faucibus turpis eu gravida
                        <br />
                        mi. Pellentesque et velit aliquam .
                    </p>
                </div>
                <div className="about-left-card">
                    <Image src={'/pointer2.svg'} alt='1' width={50} height={50} />
                    <h1>
                        Wireframing

                    </h1>
                    <p>
                        Euismod faucibus turpis eu gravida
                        <br />
                        mi. Pellentesque et velit aliquam .
                    </p>
                </div>
                <div className="about-left-card">
                    <Image src={'/pointer3.svg'} alt='1' width={50} height={50} />
                    <h1>
                        Design

                    </h1>
                    <p>
                        Euismod faucibus turpis eu gravida
                        <br />
                        mi. Pellentesque et velit aliquam .
                    </p>
                </div>
                <div className="about-left-card">
                    <Image src={'/pointer4.svg'} alt='1' width={50} height={50} />
                    <h1>
                        Development

                    </h1>
                    <p>
                        Euismod faucibus turpis eu gravida
                        <br />
                        mi. Pellentesque et velit aliquam .
                    </p>
                </div>

            </div>
        </div>
    )
}
