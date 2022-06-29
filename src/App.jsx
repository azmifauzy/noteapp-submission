import React, {useEffect, useRef, useState} from 'react'
import Header from './components/header/Header';
import Body from './components/body/Body';
import { getInitialData } from './utils';
import { Search } from './utils/CardFunction'


const App = () => {
  const [data, setData] = useState(getInitialData())
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
      setFilteredData([...data])
  }, [data])

  return (
    <>
        <Header Search={(keyword) => Search(keyword, data, setFilteredData)} />
        <Body data={data} filteredData={filteredData} setFilteredData={setFilteredData} setData={setData} />
    </>
  )
}

export default App
