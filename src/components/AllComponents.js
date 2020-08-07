import React, { useEffect } from 'react'
import About from './About'
import Projects from './Projects'
import Home from './Home'
import Contact from './Contact'
import Welcome from './Welcome'

const scrollToRef = ref => {
  console.log('this is hit')
  window.scrollTo(0, 200)
}

export default function AllComponents(props) {
  useEffect(() => {
    window.scrollTo(0, 500 * (props.scrollTo))
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
