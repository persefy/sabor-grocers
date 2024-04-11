import 'semantic-ui-css/semantic.min.css'
import { useState, useContext } from 'react'
import {DimmerDimmable,Button,Dimmer,Segment} from 'semantic-ui-react'
import DataContext from './DataContext'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import CartQuickView from './components/CartQuickView'
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

  const [productSearchQuery, setProductSearchQuery] = useState('')
  const [cartInfo, setCartInfo] = useState({
    'cart_no': '', 
    'customer_user_no': '3',
    'guest_checkout':'True',
    'cart_type':'delivery'
  })
  const [cartInfoId,setCartInfoId] = useState(0)

  const [getCartData, setGetCartData] = useState([
    {
      'id':'',
      'cart no': '', 
      'customer_user_no': '',
      'guest_checkout':'',
      'cart_type':''
    },
    {
      'id':'',
      'cart no': '', 
      'customer_user_no': '',
      'guest_checkout':'',
      'cart_type':''
    }
  ])
  const [cartItemInfo, setCartItemInfo] = useState({
    'id':'',
    'cart_item': '',
    'cart_no': '',
    'product_no': '',
    'qty': 0
  })
  const [getCartItemData, setGetCartItemData] = useState([
    {
      'id':'',
      'cart_item': '',
      'cart_no': '',
      'product_no': '',
      'qty': 0,
    },
    {
      'id':'',
      'cart_item': '',
      'cart_no': '',
      'product_no': '',
      'qty': 0,
    }
  ])


  return (
    <div className='app'>
    <DataContext.Provider value={{dimState, setDimState, categoryData, setCategoryData,subcategoryData, setSubcategoryData,products,setProducts, selectedSubcategory, setSelectedSubcategory,selectedProduct, setselectedProduct,productSearchQuery, setProductSearchQuery,cartInfo, setCartInfo,getCartData, setGetCartData, cartItemInfo, setCartItemInfo,getCartItemData, setGetCartItemData,cartInfoId,setCartInfoId}}>
      <DimmerDimmable as={Segment} dimmed={dimState}>
        <Header/>
        <Main/>
        <Footer/>
        <Dimmer active={dimState} onClickOutside={()=>setDimState(false)}>
          <Button icon='close' className='dim-close-button' onClick={()=>setDimState(false)} />
          <div className='search-popup-div'><SearchBar/></div>
          <div className='cart-popup-div'><CartQuickView/></div>
        </Dimmer>
      </DimmerDimmable>
    </DataContext.Provider>
    </div>
  )
}

export default App
