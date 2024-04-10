import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Home() {
    let navigate = useNavigate()

    return(
        <>
        <div className='home-block promo-msg'>
            <p>Spring Savings are here!</p>
        </div>
        {/* <Link className='home-block button' to='/stores'>Find Local Store</Link> */}
        <Button size='massive basic green' onClick={()=> {navigate('/stores')}}>Find Local Store</Button>
        
        </>
    )
}