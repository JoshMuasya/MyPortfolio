import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s4ioee9', 'template_5s1808e', form.current, 
    'SGBlmNQzM_3gjuk_K')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>muasyajoshua07@gmail.com</h5>
            <a href="mailto:muasyajoshua07@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_icon' />
            <h4>Messanger</h4>
            <h5>Joshua Muasya</h5>
            <a href="https://m.me/joe.kitemi" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
            <RiWhatsappLine className='contact_icon' />
            <h4>Whatsapp</h4>
            <h5>+254798040353</h5>
            <a href="https://api.whatsapp.com/send?phone=+254798040353" target="_blank">Send a Message</a>
          </article>
        </div>

          {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="8" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact