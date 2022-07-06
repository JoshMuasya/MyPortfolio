import React from 'react'
import './footer.css'
import LOGO from '../../assets/mylogo.png'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <img src={LOGO} alt="Logo" />
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#myWorks">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><FiTwitter /></a>
        <a href="https://linkedin.com"><FaLinkedinIn /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Digimatic Marketers. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer