import { useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Home() {
    let navigate = useNavigate()

    return(
        <>
        <div className='home-block promo-msg'>
            <p>Spring Savings are here!</p>
        </div>
        <Button size='massive' className='basic green' onClick={()=> {navigate('/stores')}}>Find Local Store</Button>
        
        </>
    )
}