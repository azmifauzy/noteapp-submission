import React from 'react'
import { showFormattedDate } from '../../../utils';

const CardContent = ({...card}) => {
  return (
    <div className="note-item__content">
        <h3 className="note-item__title">{card.title}</h3>
        <p className="note-item__date">{showFormattedDate(card.createdAt)}</p>
        <p className="note-item__body">{card.body}</p>
    </div>
  )
}

export default CardContent