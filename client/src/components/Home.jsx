import { Link } from 'react-router-dom'
export default function Home() {
    return(
        <>
        <div className='home-block promo-msg'>
            <p>Spring Savings are here!</p>
        </div>
        <Link className='home-block button' to='/stores'>Find Local Store</Link>
        </>
    )
}