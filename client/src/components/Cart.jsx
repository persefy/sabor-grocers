import axios from 'axios'
import { Icon, Button } from 'semantic-ui-react'

export default function Cart() {
    return(
        <>
        <div className='cart-holder'>
            <div>
                <div className='heading'>My Basket</div>
                <div className='cart-items'>
                    <div>
                        <div><span>Organic Eggs</span></div>
                        <br/>
                        <div>Qty: <span>2</span></div>
                        <br/>
                        <Button>+</Button><Button>-</Button>
                    </div>
                    <div>
                        <br/>
                        <div><span>Chicken Wings</span></div>
                        <br/>
                        <div>Qty: <span>1</span></div>
                        <br/>
                        <Button>+</Button><Button>-</Button>
                    </div>
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
                <Button className='blue'>Guest Check Out</Button>
                <Button className='basic red'>Clear Cart</Button>
            </div>

        </div>
        
        </>
    )
}