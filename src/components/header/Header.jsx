import React, {useState} from 'react'
const Header = ({Search}) => {


  return (
    <>
        <div className="note-app__header">
            <h1>Azmi Notez</h1>
            <div className="note-search">
                <input type="text" onChange={(e) => Search(e.target.value)} placeholder="Cari catatan ..."/>
            </div>
        </div>
    </>
  )
}

export default Header