import axios from 'axios'
import { Icon, Button } from 'semantic-ui-react'

export default function Cart() {
    return(
        <>
        <div className='cart-holder'>
            <div>
                <div className='heading'>My Basket</div>
                <div className='cart-items'>
                    {/* cart no --> checks existing carts, adds next number to back of list
                     */}
                     {/* 
                     - customer_user_no: 3 (none)
                     - guest_checkout --> set to TRUE
                     - cart_type --> Delivery
                     */}
                        {/* cart_item --> checks existing carts, adds next number to back of list
                            - cart_no (tie to cart via number)
                            - product_no (get when clicking)
                            - qty (raise or lower - zero equals delete)
                            */}
                </div>
                <Button className='basic green'>Guest Check Out</Button>
            </div>

        </div>
        
        </>
    )
}