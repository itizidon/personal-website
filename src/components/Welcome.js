import React from 'react'
import LinkedIn from '../assets/LinkedIn.png'
import Github from '../assets/Github.png'
import Don_Ng_Resume from '../assets/Don_Ng_Resume.pdf'
import Resume from '../assets/Resume.png'
import Me from '../assets/Me.png'
import email from '../assets/email.png'

export default function Welcome() {
  return (
    <div className="comps" id="HomePage">
      <div className="doubleWrap">
        <div className="contentWrapper">
          <div>
            <h1 className="name">Don Ng</h1>
          </div>
          <div className="meWrapperWrapper">
          <div className="meWrapper">
            <img className="me" src={Me} alt="me"></img>
          </div>
          </div>
          <div className="list">
            <p>Software Engineer</p>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/don-ng1/" className="linkedIn">
              <img
                src={LinkedIn}
                height="54.0px"
                width="63.5px"
                alt="linkedinlogo"
              ></img>
            </a>
            <a className="github" href="https://github.com/itizidon">
              <img
                src={Github}
                height="60px"
                width="60px"
                alt="githublogo"
              ></img>
            </a>
            <a className="resume" href={Don_Ng_Resume} download>
              <img src={Resume} height="60px" width="60px" alt="resume"></img>
            </a>
            <img className="emailicon" src={email} alt="email" onClick={()=>{
              navigator.clipboard.writeText('dng21@binghamton.edu')
              alert('dng21@binghamton.edu has been copied')
            }}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
