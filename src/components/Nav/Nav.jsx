import React, { useEffect, useRef } from 'react'
import './Nav.css'
import Logo from '../../assets/NotflixLogo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import drpdown from '../../assets/drpdown.svg'

const Nav = () => {

  const navRef =useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 80){
        navRef.current.classList.add('darkNav')
      }else{
        navRef.current.classList.remove('darkNav')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navBar'>
      <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Upcoming</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt='' className='icons'></img>
        <p>Children</p>
        <img src={bell} alt='' className='icons'></img>
        <div className='navbar-profile'>
          <img src={profile_img} alt='' className='profile'></img>
          <img src={drpdown} alt=''></img>
          <div className='dropdown'>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
