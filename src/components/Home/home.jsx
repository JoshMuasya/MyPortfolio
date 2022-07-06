import React, { useEffect, useState } from 'react'
import './home.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HomeSocials from './HomeSocials'
import Typewriter from 'typewriter-effect'

const Home = () => {

  var typewriter = new Typewriter ({
    loop: true,
    delay: 75, 
  });

  return (
    <header>
      <div className="container home_container">
        <h5>Welcome to My World</h5>
        <h1>Hi, I'm Joshua Muasya</h1>
        <h2>
          <Typewriter
            options={{
              loop: true,
              delay: 75,
            }} 
            onInit={(typewriter) => {
              typewriter
              .pauseFor(2500)
              .typeString('FullStack Developer')
              .pauseFor(300)
              .deleteAll()
              .typeString('UI/UX Designer')
              .pauseFor(300)
              .deleteAll()
              .typeString('Graphic Designer')
              .pauseFor(1000)
              .start();
            }}
          />
        </h2>
        <h3 className='text-light'>Based in Kenya<span>.</span></h3>
        <CTA />
        <HomeSocials />

        <div className="me">
          <img src={ ME } alt="My Picture" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Home