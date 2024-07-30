import React from 'react'
import './Footer.css'
import ytubeIcon from "../../assets/youtube_icon.png"
import XIcon from "../../assets/twitter_icon.png"
import instaIcon from "../../assets/instagram_icon.png"
import fBookIcon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerIcons'>
        <img src={fBookIcon} alt="" />
        <img src={instaIcon} alt="" />
        <img src={XIcon} alt="" />
        <img src={ytubeIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyrightText'>© 2024 Notflix</p>
    </div>
  )
}

export default Footer
