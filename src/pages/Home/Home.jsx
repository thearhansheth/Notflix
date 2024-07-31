import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      <div className='hero'>
        <img src={heroBanner} alt="" className='bannerImg'></img>
        <div className='hero-caption'>
          <img src={heroTitle} alt='' className='captionImg'></img>
          <p>Discovering his ties to a secret ancient order, a young 
            man living in modern Istanbul embarks on a quest to save the 
            city from an immortal enemy.</p>
            <div className='heroBtns'>
              <button className='btn'><img src={playIcon} alt=''></img>Play</button>
              <button  className='btn dark-btn'><img src={infoIcon} alt=''></img>More Info</button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className='moreCards'>
        <TitleCards title={"Top Rated"} category={'top_rated'}/>
        <TitleCards title={"Popular"} category={'popular'}/>
        <TitleCards title={"Upcoming"} category={'upcoming'}/>
        <TitleCards title={"Now Playing"} category={'now_playing'}/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
