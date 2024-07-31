import React, { useEffect, useState } from 'react'
import './Player.css'
import arrowIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const  {id} = useParams();
  const arrowNav = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGM2MzNmZDhlM2YyZDg0YjU1MmYxNmFlNWVkZjM1MSIsIm5iZiI6MTcyMjQyMDk3My4xNzExMTYsInN1YiI6IjY2YWEwZGNhNDI4YWIwYzAzY2EzODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9jGWZIJNCB-MgrEKMLUncKcuXK8Plmzq1BB8eMNCG4Q'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  },[])
  
  

  return (
    <div className='player'>
      <img src={arrowIcon} alt="" onClick={()=>{arrowNav(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="playerInfo">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
