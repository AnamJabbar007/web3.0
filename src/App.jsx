import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Projects from './component/Projects'
import Infinity from './component/Infinity'
import ProjectSlider from './component/ProjectSlider'
import Svg from './component/Svg'
import Career from './component/Career'
import About from './component/About'
import Footer from './component/Footer'




const App = () => {
  return (
    <main className='overflow-hidden'>
      <Navbar/>
      <HeroSection/>
      <Infinity/>
      <Projects/>
      <ProjectSlider/>
      <Svg/>
      <Career/>
      <About/>
      <Footer/>
    </main>
  )
}

export default App
