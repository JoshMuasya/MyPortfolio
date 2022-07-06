import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HomeSocials = () => {
  return (
    <div className="home_socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HomeSocials