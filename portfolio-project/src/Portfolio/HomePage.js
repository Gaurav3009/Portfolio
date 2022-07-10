import React from 'react'
import NavBar from './NavBar';
import Introduction from './Introduction';
import Academics from './Academics';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
function HomePage() {
  return (
    <section>
        <NavBar/>
        <Introduction/>
        <Academics/>
        <Skills/>
        <Projects/>
        <Contact/>
    </section>
  )
}

export default HomePage