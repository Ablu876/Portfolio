import React from 'react'

import Navbar from"./Components/Navbar"
import Home from"./Components/Home"
import About from"./Components/About"
import Skills from"./Components/Skills"
import Projects from"./Components/Projects"
import Resume from"./Components/Resume"
import Contact from"./Components/Contact"
import Footer from"./Components/Footer"
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
    </div>
    <Toaster />
    </>
  )
}

export default App
