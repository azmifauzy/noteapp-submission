import React from 'react'

const CardButtons = ({onArchive,onDelete,card}) => {

  return (
    <div className="note-item__action">
        <button onClick={() => onDelete(card.id)} className="note-item__delete-button">Delete</button>
        <button onClick={() => onArchive(card.id)} className="note-item__archive-button">{card.archived ? 'Pindahkan' : 'Arsipkan'}</button>
    </div>
  )
}

export default CardButtons