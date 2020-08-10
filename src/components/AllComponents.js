import React, { useEffect } from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Welcome from './Welcome'
import Education from './Education'

export default function AllComponents(props) {
  useEffect(() => {
    window.scrollTo({ top: props.scrollTo, behavior: 'smooth' })
  }, [props.scrollTo])
  return (
    <div>
      <Welcome></Welcome>
      <Education></Education>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}
