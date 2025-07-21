import React from 'react'
import { HiUserGroup } from "react-icons/hi2";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaPencilRuler } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import Image from 'next/image';
export default function Features() {
  return (
    <div className='features'>
      <div className="features-top">
        <p>
          Features
        </p>
        <h1>
          Design that solves
          <br />
          problems, one product at
          <br />
          a time
        </h1>
      </div>
      <div className="features-conteiner">
        <div className="features-card">
          <HiUserGroup className='Features-icon' />
          <h1>
            Lorem, ipsum dolor.
          </h1>
          <p>
            Euismod faucibus turpis eu gravida mi.
            <br />
            Pellentesque et velit aliquam sed faucib
            <br />
            turpis eu gravida mi. Pellentesque et
            <br />
            velit aliquam sed mi.
          </p>

        </div>
        <div className="features-card">
          <IoIosCheckmarkCircle className='Features-icon' />
          <h1>
            Lorem, ipsum dolor.
          </h1>
          <p>
            Euismod faucibus turpis eu gravida mi.
            <br />
            Pellentesque et velit aliquam sed faucib
            <br />
            turpis eu gravida mi. Pellentesque et
            <br />
            velit aliquam sed mi.
          </p>



        </div>
        <div className="features-card">
          <FaPencilRuler className='Features-icon' />
          <h1>
            Lorem, ipsum dolor.
          </h1>
          <p>
            Euismod faucibus turpis eu gravida mi.
            <br />
            Pellentesque et velit aliquam sed faucib
            <br />
            turpis eu gravida mi. Pellentesque et
            <br />
            velit aliquam sed mi.
          </p>


        </div>
        <div className="features-card">
          <IoIosChatbubbles className='Features-icon' />

          <h1>
            Lorem, ipsum dolor.
          </h1>
          <p>
            Euismod faucibus turpis eu gravida mi.
            <br />
            Pellentesque et velit aliquam sed faucib
            <br />
            turpis eu gravida mi. Pellentesque et
            <br />
            velit aliquam sed mi.
          </p>

        </div>
        <div className="features-card">
          <MdTimer className='Features-icon' />

          <h1>
            Lorem, ipsum dolor.
          </h1>
          <p>
            Euismod faucibus turpis eu gravida mi.
            <br />
            Pellentesque et velit aliquam sed faucib
            <br />
            turpis eu gravida mi. Pellentesque et
            <br />
            velit aliquam sed mi.
          </p>

        </div>
        <div className="features-card">
          <Image src={'/iconf.png'} alt='DOC' width={34} height={34} className='Features-icon' />

          <h1>
            Lorem, ipsum dolor.
          </h1>
          <p>
            Euismod faucibus turpis eu gravida mi.
            <br />
            Pellentesque et velit aliquam sed faucib
            <br />
            turpis eu gravida mi. Pellentesque et
            <br />
            velit aliquam sed mi.
          </p>

        </div>

      </div>
    </div>
  )
}
