import React, { useState } from 'react'
import './App.css'
import AllComponents from './components/AllComponents'
import Don_Ng_Resume from './assets/Don_Ng_Resume.pdf'

let sidebar = ['home', 'about', 'projects', 'contact']

export default function App() {
  const [selected, setSelected] = useState('welcome')
  return (
    <div className="mainbody">
      <div className="navBar">
        <div className="navContents">
          <ul onClick={() => setSelected('home')}>Home</ul>
          <ul onClick={() => setSelected('about')}>About</ul>
          <ul onClick={() => setSelected('projects')}>Projects</ul>
          <ul onClick={() => setSelected('contact')}>Contact</ul>
          <ul>
            <a href={Don_Ng_Resume} download>Resume</a>
          </ul>
        </div>
      </div>
      <div className="allComps">
        <AllComponents scrollTo={sidebar.indexOf(selected)}></AllComponents>
      </div>
    </div>
  )
}
