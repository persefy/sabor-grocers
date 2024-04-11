import { useEffect, useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext  from '../DataContext';
import { Icon, Button } from 'semantic-ui-react'

export default function ItemDetail() {
    const { products,setProducts,selectedProduct, setselectedProduct } = useContext(DataContext);
    let navigate = useNavigate()

    useEffect(() => {
        const getCategory = async() => {
            const response = await axios.get(`http://localhost:8000/products/`)
            const response2 = await axios.get(`http://localhost:8000/products/${selectedProduct}`)
            setProducts(response.data)
            setselectedProduct(response2.data)
            console.log(products)
            console.log(selectedProduct)
        }
        getCategory()
    }, [])

    // Add item to cart
    return(
        <>
        <div className='main-content item-detail'>
            <h2>Item Details</h2>
            <h4 className='result-header'>{selectedProduct.short_description}</h4>
            <div className='item-page-holder'>
                <div className='item-img-holder'>
                    <img alt={selectedProduct.short_description} src={selectedProduct.image_url}/>
                </div>
                <div className='item-page-side-info'>
                    <p className='result-vendor'>{selectedProduct.preferred_vendor}</p>
                    <p className='result-description'>{selectedProduct.details}</p>
                </div>
            </div>
            <p className='result-cost item-page-cost'>${selectedProduct.average_cost}</p>
            <Button className='green'
                onClick={()=>{

                    
                    // create a cart if none already existing
                    // add cart item to cart
                }}><Icon name='plus' size='large'/>Add to Cart</Button>
        </div>
        </>
    )
}