import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <>
        <nav>
            <Link className='nav-item' to='/fresh-foods'>Fresh Foods</Link>
            <Link className='nav-item' to='/coffee'>Coffee</Link>
            <Link className='nav-item' to='/kitchen'>Kitchen</Link>
        </nav>
        </>

    )
}