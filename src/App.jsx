import React from 'react'
import About from './components/About/about'
import Home from './components/Home/home'
import Nav from './components/Nav/nav'
import Experience from './components/Experience/experience'
import Services from './components/Services/services'
import MyWork from './components/MyWork/myWork'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


const App = () => {
  return (
    <>
        <Home />
        <Nav />
        <About />
        <Experience />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
    </>
  )
}

export default App