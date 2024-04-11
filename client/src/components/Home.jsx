import { useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import DataContext  from '../DataContext';
import { Button } from 'semantic-ui-react'
import axios from 'axios'

export default function Home() {
    const { categoryData, setCategoryData} = useContext(DataContext);
    
    let navigate = useNavigate()

    useEffect(() => {
        const getCategory = async() => {
            const response = await axios.get(`http://localhost:8000/categories/`)
            setCategoryData(response.data)
            // console.log(response.data)
            console.log(categoryData)
        }
        getCategory()
    }, [categoryData])

    if (!categoryData) {
        return <h1>Loading data...</h1>
    } else {
        return (
        <>
        <div className='main-content'>
            <h2>Welcome to Sabor Grocers!</h2>
            <div className='home-block home-promo-msg'>
                <p>
                    <span className='savings'>Savings Event: April 21st - May 3rd</span><br/>
                    Head to your local store during the last two weeks of April for store-wide discounts on fresh foods and specialty coffee.
                </p>
            </div>
            <div className='home-block'>
                <p>Fresh foods await!</p>
                <div><Button size='massive' className='basic green' onClick={()=> {navigate('/stores')}}>Find Local Store</Button></div>
            </div>
            <div className='home-intro'>
                <p>Sabor Grocers is a chain grocery retailer offering fresh foods, whole coffee beans, and other kitchen goodies in the greater Pinn City area.</p>
                <p>We carry specialty, quality coffee beans freshly imported from Colombia, Brazil and more! </p>
            </div>
            <div>
                <p>Click below to see our online selection available for local delivery or order for in-store pick-up.</p>
                <ul className='home-category-links'>
                    
                    <li onClick={()=> {navigate('/fresh-foods')}}>
                        <span><img src={categoryData[0].image_url}/></span>
                        <span>Fresh Foods</span>
                    </li>
                    <li onClick={()=> {navigate('/coffee')}}>
                        <span><img src={categoryData[1].image_url}/></span>
                        <span>Coffee</span>
                    </li>
                    <li onClick={()=> {navigate('/kitchen')}}>
                        <span><img src={categoryData[2].image_url}/></span>
                        <span>Kitchen</span>
                    </li>
                </ul>
            </div>
            
            
        </div>
        </>
    )
}
}