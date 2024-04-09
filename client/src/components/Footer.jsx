import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <>
        <footer>
            <div>Footer will go here</div>
            <Link className='button' to='/stores'>See Stores</Link>
        </footer>
        </>
    )
}