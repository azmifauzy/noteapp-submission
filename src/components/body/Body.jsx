import React from 'react'
import Cards from './cards/Cards';
import { Archive, Delete, Create } from '../../utils/CardFunction';
import Modals from './modals/Modals';

const Body = ({data, setData, filteredData}) => {

  return (
    <div className="note-app__body">
        <Modals onCreate={(formData, e, setForm) => Create(formData, e, setForm, data, setData)} />

        <Cards onArchive={(id) => Archive(id, data, setData)} 
               onDelete={(id) => Delete(id, data, setData)} 
               cardTitle={"Catatan Aktif"} 
               cards={filteredData.filter((card) => card.archived == false) } 
        />
        <Cards onArchive={(id) => Archive(id, data, setData)} 
               onDelete={(id) => Delete(id, data, setData)} 
               cardTitle={"Catatan Arsip"} 
               cards={filteredData.filter((card) => card.archived == true) } 
        />
    </div>
  )
}

export default Body