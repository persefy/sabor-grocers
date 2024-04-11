import 'semantic-ui-css/semantic.min.css'
import { useState, useContext } from 'react'
import {DimmerDimmable,Button,Dimmer,Segment} from 'semantic-ui-react'
import DataContext from './DataContext'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Aside from './components/Aside'
import SearchBar from './components/SearchBar'
import './App.css'


function App() {
  const [dimState, setDimState] = useState(false)
  const [categoryData, setCategoryData] = useState([
    {
      'name': '',
      'image_url':''
    },
    {
      'name': '',
      'image_url':''
    },
    {
      'name': '',
      'image_url':''
    }

  ])
  const [subcategoryData, setSubcategoryData] = useState([
    {
      'name': '',
      'image_url':''
    },
    {
      'name': '',
      'image_url':''
    },
    {
      'name': '',
      'image_url':''
    }

  ])

  return (
    <div className='app'>
    <DataContext.Provider value={{dimState, setDimState, categoryData, setCategoryData,subcategoryData, setSubcategoryData}}>
      <DimmerDimmable as={Segment} dimmed={dimState}>
        <Header/>
        <Main/>
        <Footer/>
        <Dimmer active={dimState} onClickOutside={()=>setDimState(false)}>
          <Button icon='close' className='dim-close-button' onClick={()=>setDimState(false)} />
          <div className='search-popup-div'><SearchBar/></div>
          <div className='cart-popup-div'><Aside/></div>
        </Dimmer>
      </DimmerDimmable>
    </DataContext.Provider>
    </div>
  )
}

export default App
