import React from 'react'
import Bing from '../assets/Bing.png'
import Fullstack from '../assets/Fullstack.png'
export default function Education() {
  return (
    <div className="comps">
      <div className="educationwrapper">
        <div className="educationwrapperwrapper">
          <h1 className="educationtitle">Education</h1>
          <div className="education">
            <div className="institution"c>
              <div className="bingWrapper">
              <img className="bingImage" src={Bing} alt="bing"></img>
              </div>
              <h6>Binghamton University</h6>
              <p className="titles">
                Bachelor of Science in Business Administration with a
                Concentration in Finance
              </p>
              <p>GPA 3.33</p>
            </div>
            <div className="institution">
              <div className="fullstackwrapperwrapper">
              <div className="fullstackwrapper">
              <img className="fullstackicon" src={Fullstack} alt="fullstack"></img>
              </div>
              </div>
              <h6 className="fullstackheader">Fullstack Academy</h6>
              <p className="titles">17-Week Full Stack Immersive</p>
              <p>Certificate, Software Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
