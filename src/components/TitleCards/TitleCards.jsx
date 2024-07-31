import React, { useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGM2MzNmZDhlM2YyZDg0YjU1MmYxNmFlNWVkZjM1MSIsIm5iZiI6MTcyMjQyMDk3My4xNzExMTYsInN1YiI6IjY2YWEwZGNhNDI4YWIwYzAzY2EzODk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9jGWZIJNCB-MgrEKMLUncKcuXK8Plmzq1BB8eMNCG4Q'
    }
  };

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular on Notflix"}</h2>
      <div className='cardList'>
        {apiData.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
