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
            <div className="icon-buttons-holder">
                <div className='search-form-toggle'>
                    <Button size='tiny' className='basic gray' onClick={()=>
                        {setDimState(true);document.querySelector('.cart-quickview').classList.add('hide-this');document.querySelector('.search-form').classList.remove('hide-this');}}>
                        <img src={searchIcon} alt='search icon'/>
                    </Button>
                </div>
                <div className='cart-toggle-mobile'>
                    <Button size='tiny' className='basic gray cart-icon' onClick={()=>
                        {setDimState(true);document.querySelector('.cart-quickview').classList.remove('hide-this');document.querySelector('.search-form').classList.add('hide-this');}}>
                        <Icon name='cart' size='large'/>
                    </Button>
                </div>
                <div className='cart-toggle-large'>
                    <Button size='tiny' className='basic gray cart-icon' onClick={()=>console.log('sidebar will appear')}>
                        <Icon name='cart' size='large'/>
                    </Button>
                </div>
                <div className="user-button-holder">
                    <Button size='tiny' className='basic gray cart-icon' onClick={()=> {navigate('/user')}}>
                        <Icon name='user' size='large'/>
                    </Button>
                </div>
            </div>
            <Nav/>
        </header>
        </>
    )
}