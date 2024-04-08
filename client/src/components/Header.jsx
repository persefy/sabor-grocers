import { useNavigate } from "react-router-dom"
import Nav from './Nav'
import SearchBar from "./SearchBar"

export default function Header() {
    let navigate = useNavigate()

    return(
        <>
        <h1 onClick={()=> {navigate('/')}}>Sabor Grocers</h1>
        <Nav/>
        <SearchBar/>
        </>
    )
}