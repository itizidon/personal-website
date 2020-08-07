import React, { useEffect } from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Welcome from './Welcome'

const scrollToRef = ref => {
  window.scrollTo(0, 200)
}

export default function AllComponents(props) {
  useEffect(() => {
    console.log(props.scrollTo)
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
