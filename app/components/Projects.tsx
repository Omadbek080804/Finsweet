import React from 'react'
import { LuMoveRight } from "react-icons/lu";
export default function Projects() {
  return (
    <div className='project'>
      <div className="project-card">
        <div className="project-header">
          <h1>
            View our projects
          </h1>
          <button>
            View More
            <LuMoveRight className='arrow black' />
          </button>
        </div>
        <div className="project-main">

          <div className="project-left">
            <div className="project-left-box">
              <h1>
                Workhub office Webflow <br /> Webflow Design
              </h1>
              <p>
                Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam
              </p>
              <button className="project-btn">
                View project
                <LuMoveRight className='arrow yellow' />

              </button>
            </div>
          </div>
          <div className="project-right">
            <div className="project-right-top">
              <div className="project-top-box">
                <h1>
                  Unisaas Website <br />
                  Design
                </h1>
                <button className='project-btn'>
                  View portfolio
                  <LuMoveRight className='arrow yellow' />

                </button>
              </div>
            </div>
            <div className="project-right-bottom">
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
