import { useNavigate } from "react-router-dom"
import { useContext } from 'react'
import DataContext  from '../DataContext';
import Nav from './Nav'
import logo from '../assets/logo.png'
import searchIcon from '../assets/searchIcon.png'
import { Icon, Button } from 'semantic-ui-react'

export default function Header() {
    let navigate = useNavigate()
    const { dimState, setDimState} = useContext(DataContext);

    return(
        <>
        <header>
            <div className='h1-container'>
                <h1 onClick={()=> {navigate('/')}}><img src={logo} alt='sabor grocers logo' className='logo'></img><span>Sabor Grocers</span></h1>
            </div>

            <div className='search-form-toggle'>
                <Button size='tiny' className='basic gray' onClick={()=>setDimState(true)}>
                    <img src={searchIcon} alt='search icon'/>
                </Button>
            </div>
            <div>
                <Button size='tiny' className='basic gray cart-icon' onClick={()=>setDimState(true)}>
                    <Icon name='cart' size='large'/>
                </Button>
            </div>
            <Nav/>
        </header>
        </>
    )
}