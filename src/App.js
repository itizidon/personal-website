import React, { useState } from 'react'
import './App.css'
import AllComponents from './components/AllComponents'
import Don_Ng_Resume from './assets/Don_Ng_Resume.pdf'
let sidebar = ['home', 'about', 'projects', 'contact']

let ycoord = [0, 720, 1500, 3300]

export default function App() {
  const [selected, setSelected] = useState('welcome')
  return (
    <div className="mainbody">
      <div className="navBar">
        <div className="navWrapper">
          <div className="navContents">
            <h1 className="logo">Portfolio</h1>
            <ul onClick={() => setSelected('home')}>Home</ul>
            <ul onClick={() => setSelected('about')}>About</ul>
            <ul onClick={() => setSelected('projects')}>Projects</ul>
            <ul onClick={() => setSelected('contact')}>Contact</ul>
            <ul id="viewResume">
              <a classname="viewResume" href={Don_Ng_Resume}>
                Resume
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="allComps">
        <AllComponents
          scrollTo={ycoord[sidebar.indexOf(selected)]}
        ></AllComponents>
      </div>
    </div>
  )
}
