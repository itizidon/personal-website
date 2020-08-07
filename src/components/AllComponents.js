import React, { useEffect } from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Welcome from './Welcome'

export default function AllComponents(props) {
  useEffect(() => {
    window.scrollTo({ top: props.scrollTo, behavior: 'smooth' })
  }, [props.scrollTo])
  return (
    <div>
      <Welcome></Welcome>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}
