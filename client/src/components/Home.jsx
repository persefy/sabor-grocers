import { useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

export default function Home() {
    let navigate = useNavigate()

    return(
        <>
        <div className='main-content'>
            <h2>Welcome to Sabor Grocers!</h2>
            
            
            <div className='home-block home-promo-msg'>
                <p>
                    <span className='savings'>April 21st - May 3rd</span><br/>
                    Head to your local store during the last two weeks of April for store-wide discounts on fresh foods and specialty coffee.
                </p>
            </div>
            <div className='home-intro'>
                <p>Sabor Grocers is a chain grocery retailer offering fresh foods, whole coffee beans, and other kitchen goodies in the greater Pinn City area.</p>
                <p>We carry specialty, quality coffee beans freshly imported from Colombia, Brazil and more! </p>
            </div>
            <div>
                <ul>
                    <li onClick={()=> {navigate('/fresh-foods')}}>Fresh Foods</li>
                    <li onClick={()=> {navigate('/coffee')}}>Coffee</li>
                    <li onClick={()=> {navigate('/kitchen')}}>Kitchen</li>
                </ul>
            </div>
            <div className='home-block'>
                <p>Fresh foods await!</p>
                <div><Button size='massive' className='basic green' onClick={()=> {navigate('/stores')}}>Find Local Store</Button></div>
            </div>
            
        </div>
        </>
    )
}