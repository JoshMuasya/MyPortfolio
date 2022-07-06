import React from 'react'
import './myWork.css'
import IMG1 from '../../assets/Portfolio1.jpeg'
import IMG2 from '../../assets/mylogo.png'
import IMG3 from '../../assets/Landing Page.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Odyssey Africa Hikes Website',
    github: 'https://github.com',
    demo: 'https://odysseyafricahikes.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio Logo',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 3,
    image: IMG3,
    title: 'My Portfolio UI/UX Design',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const myWork = () => {
  return (
    <section id='mywork'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={ image } alt={title} />
                </div>

                <h3>{title}</h3>

                <div className="portfolio_item_cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn_primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }        
      </div>
    </section>
  )
}

// ADD TESTIMONIALS LATER ON

export default myWork