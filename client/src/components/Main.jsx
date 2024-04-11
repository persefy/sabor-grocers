import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import FilteredResults from './FilteredResults'
import ItemDetail from './ItemDetail'
import StoreList from './StoreList'
import User from './User'
import Cart from './Cart'
import Order from './Order'
import FreshFoods from './FreshFood'
import Coffee from './Coffee'
import Kitchen from './Kitchen'

export default function Main() {
    return(
        <>
        <main>
            <Routes>
                <Route exact path ="/" element ={<Home/>} />
                <Route exact path ="/results/:query" element ={<FilteredResults/>} />
                <Route exact path ="/fresh-foods" element ={<FreshFoods/>} />
                <Route exact path ="/coffee" element ={<Coffee/>} />
                <Route exact path ="/kitchen" element ={<Kitchen/>} />
                <Route exact path ="/products/:id" element ={<ItemDetail/>} />
                <Route exact path ="/stores" element ={<StoreList/>} />
                <Route exact path ="/user" element ={<Home/>} />
                <Route exact path ="/user" element ={<User/>} />
                <Route exact path ="/cart" element ={<Cart/>} />
                <Route exact path ="/order" element ={<Order/>} />
            </Routes>
        </main>
        </>
    )
}