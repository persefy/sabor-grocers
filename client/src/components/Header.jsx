import { useNavigate } from "react-router-dom"
import Nav from './Nav'
import SearchBar from "./SearchBar"
import logo from '../assets/logo.png'

export default function Header() {
    let navigate = useNavigate()

    return(
        <>
        <header>
            <div className="h1-container">
                <h1 onClick={()=> {navigate('/')}}><img src={logo} alt='sabor grocers logo' className='logo'></img><span>Sabor Grocers</span></h1>
            </div>
            <SearchBar/>
            <Nav/>
        </header>
        </>
    )
}