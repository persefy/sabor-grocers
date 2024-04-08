import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <>
        <nav>
        <Link to='/fresh-foods'>Fresh Foods</Link>
        <Link to='/coffee'>Coffee</Link>
        <Link to='/kitchen'>Kitchen</Link>
        </nav>
        </>

    )
}