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

  return (
    <div>
    <DataContext.Provider value={{dimState, setDimState}}>
      <DimmerDimmable as={Segment} dimmed={dimState}>
        
        <Header/>
        <Main/>
        <Footer/>
        <Dimmer active={dimState} onClickOutside={()=>setDimState(false)}>
          <Button icon='close' className='dim-close-button' onClick={()=>setDimState(false)} />
        </Dimmer>
      </DimmerDimmable>
      {/* <Aside/>
      <SearchBar/>
      <Button icon='plus' onClick={()=>setDimState(true)} /> */}
    </DataContext.Provider>
    </div>
  )
}

export default App
