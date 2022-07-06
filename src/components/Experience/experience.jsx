import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
            
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            {/* <article className="experience_details">
              <HiBadgeCheck />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article> */}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
            
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience_details">
              <HiBadgeCheck className= 'experience_details_icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience