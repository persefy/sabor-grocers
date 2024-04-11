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
      'image_url':'',
      'id':'',
      
    },
    {
      'name': '',
      'image_url':'',
      'id':'',

    },
    {
      'name': '',
      'image_url':'',
      'id':'',

    }

  ])
  const [products,setProducts] = useState([
    {
      'short_description':'',
      'details':'',
      'average_cost':'',
      'sku':'',
      'image_url':'',
      'subcategory_id':'',
      'preferred_vendor':''
    },
    {
      'short_description':'',
      'details':'',
      'average_cost':'',
      'sku':'',
      'image_url':'',
      'subcategory_id':'',
      'preferred_vendor':''
    },
    {
      'short_description':'',
      'details':'',
      'average_cost':'',
      'sku':'',
      'image_url':'',
      'subcategory_id':'',
      'preferred_vendor':''
    },
  ])
  const [selectedProduct, setselectedProduct] = useState(0)
  const [selectedSubcategory, setSelectedSubcategory] = useState(0)

  // "id": 1,
  // "product_no": "1",
  // "product_url": "http://localhost:8000/products/1",
  // "short_description": "Whole Bean Colombian Coffee",
  // "details": "Whole Bean Colombian Coffee",
  // "preferred_vendor": "Sanchez Roast",
  // "average_cost": "25.00",
  // "sku": 1234,
  // "image_url": "https://t4.ftcdn.net/jpg/05/48/72/31/360_F_548723167_cKAqMvsEswmLiRpIDeBYFHdzhhhAX46J.jpg",
  // "subcategory_id": 1,
  
  return (
    <div className='app'>
    <DataContext.Provider value={{dimState, setDimState, categoryData, setCategoryData,subcategoryData, setSubcategoryData,products,setProducts, selectedSubcategory, setSelectedSubcategory,selectedProduct, setselectedProduct}}>
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
