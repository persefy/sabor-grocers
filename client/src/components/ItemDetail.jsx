import { useEffect, useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext  from '../DataContext';
import { Icon, Button } from 'semantic-ui-react'

export default function ItemDetail() {
    const { products,setProducts,selectedProduct, setselectedProduct,cartInfo, setCartInfo,getCartData, setGetCartData,cartInfoId,setCartInfoId } = useContext(DataContext);

    let navigate = useNavigate()

    useEffect(() => {
        const getCategory = async() => {
            const response = await axios.get(`http://localhost:8000/products/`)
            const response2 = await axios.get(`http://localhost:8000/products/${selectedProduct}`)
            const response3 = await axios.get(`http://localhost:8000/carts/`)

            setProducts(response.data)
            setselectedProduct(response2.data)
            setGetCartData(response3.data)
            // console.log(products)
            // console.log(selectedProduct)
            console.log(getCartData.length)
        }
        getCategory()
    }, [])

    let checkCartNo = []
//if no cart, create
    if (cartInfo.cart_no == '') {
        getCartData.forEach((cart) => {
            checkCartNo.push(cart.cart_no)
            console.log(`pushed ${cart.cart_no}`)
        },
    )}
    let newCartNo = (Math.max(...checkCartNo)) + 1
    // console.log(checkCartNo)
    // console.log(newCartNo)

    const createCart = async () => {
        axios.post(`http://localhost:8000/carts/`, { // ref: https://axios-http.com/docs/post_example
     
            "cart_no": cartInfo.cart_no,
            "customer_user_no": cartInfo.customer_user_no,
            "customer_user_no_id": cartInfo.customer_user_no,
            "guest_checkout": cartInfo.guest_checkout,
            "cart_type": cartInfo.cart_type
          
            })
            .then(function (response) {
                console.log(response);
                setCartInfo(cartInfo.id = response.data.id)
            })
            .catch(function (error) {
            console.log(error);
            });
            console.log(cartInfo)
    }

    const createCartItem = async () => {
        axios.post(`http://localhost:8000/cartitems/`, { // ref: https://axios-http.com/docs/post_example
     
            "cart_no": cartInfo.cart_no,
            "customer_user_no": cartInfo.customer_user_no,
            "customer_user_no_id": cartInfo.customer_user_no,
            "guest_checkout": cartInfo.guest_checkout,
            "cart_type": cartInfo.cart_type
          
            })
            .then(function (response) {
                console.log(response);
                setCartInfo(cartInfo.id = response.data.id)
            })
            .catch(function (error) {
            console.log(error);
            });
            console.log(cartInfo)
    }
    


    const DeleteCart = async () => {
        // axios.delete(`http://localhost:8000/carts/${cartInfo.cart_no}/`)
        axios.delete(`http://localhost:8000/carts/${cartInfoId}/`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });

          setCartInfo(
            {
                'cart_no': '', 
                'customer_user_no': '3',
                'guest_checkout':'True',
                'cart_type':'delivery'
            })
            console.log(cartInfo)
    }

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

                    if (cartInfo.cart_no == '') {
                        cartInfo.cart_no = newCartNo
                        console.log(cartInfo)
                        createCart()
                        
                    } else {
                        console.log('removing cart data')
                        // DeleteCart()
                    }
                    // create a cart if none already existing
                    // add cart item to cart
                }}><Icon name='plus' size='large'/>Add to Cart</Button>
        </div>
        </>
    )
}