import React from 'react'
import Navbar from './assets/Navbar'
import Home from './assets/Home'
import About from './assets/About'
import Skills from './assets/Skills'
import Projects from './assets/Projects'
import Education from './assets/Education'
import Footer from './assets/Footer'
import Experience from './assets/Experience'
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>
      <Analytics/>
    </div>
  )
}

export default App