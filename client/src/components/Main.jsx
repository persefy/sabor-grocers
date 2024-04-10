import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import FilteredResults from './FilteredResults'
import NavResults from './NavResults'
import ItemDetail from './ItemDetail'
import StoreList from './StoreList'
import StoreDetails from './StoreDetails'
import User from './User'
import Cart from './Cart'
import Order from './Order'

export default function Main() {
    return(
        <>
        <main>
            <Routes>
                <Route exact path ="/" element ={<Home/>} />
                <Route exact path ="/results/:query" element ={<FilteredResults/>} />
                <Route exact path ="/:category" element ={<NavResults/>} />
                <Route exact path ="/products/:id" element ={<ItemDetail/>} />
                <Route exact path ="/stores" element ={<StoreList/>} />
                <Route exact path ="/stores/:id" element ={<StoreDetails/>} />
                <Route exact path ="/user" element ={<Home/>} />
                <Route exact path ="/user" element ={<User/>} />
                <Route exact path ="/cart" element ={<Cart/>} />
                <Route exact path ="/order" element ={<Order/>} />
            </Routes>
        </main>
        </>
    )
}