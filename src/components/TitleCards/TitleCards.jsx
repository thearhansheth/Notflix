import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {
  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular on Notflix"}</h2>
      <div className='cardList'>
        {cards_data.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
