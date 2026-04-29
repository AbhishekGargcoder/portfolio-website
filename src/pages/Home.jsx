import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home