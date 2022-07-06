import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Serices</h2>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB */}

        <article className="service">
          <div className="service_head">
            <h3>GRAPHIC Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHIC */}
      </div>
    </section>
  )
}

export default Services