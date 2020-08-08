import React from 'react'
import LinkedIn from '../assets/LinkedIn.png'
import Github from '../assets/Github.png'
import Don_Ng_Resume from '../assets/Don_Ng_Resume.pdf'
import Resume from '../assets/Resume.png'

export default function Welcome() {
  return (
    <div className="comps" id="HomePage">
      <h1>Don Ng</h1>
      <h1>Software Engineer</h1>
      <a href="https://www.linkedin.com/in/don-ng1/" className="linkedIn">
        <img src={LinkedIn} height="54.0px" width="63.5px"></img>
      </a>
      <a href="https://github.com/itizidon">
        <img src={Github} height="60px" width="60px"></img>
      </a>
      <a className="resume" href={Don_Ng_Resume} download>
        <img src={Resume} height="60px" width="60px"></img>
      </a>
    </div>
  )
}
