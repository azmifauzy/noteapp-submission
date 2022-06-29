import React, {useEffect, useState} from 'react'
import CardButtons from './CardButtons'
import CardContent from './CardContent'
const Cards = ({onArchive, onDelete, cards, cardTitle}) => {

  return (
    <>
        <h2>{cardTitle}</h2>
        { cards.length == 0 
        ? 
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        : 
          <div className="notes-list">
              {cards.map((card) => (
              <div key={card.id} className="note-item">
                  <CardContent {...card} />
                  <CardButtons onArchive={onArchive} onDelete={onDelete} card={card} />
              </div>
              ))}
          </div>
        } 
    </>
  )
}

export default Cards