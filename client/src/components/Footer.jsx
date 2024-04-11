import { useNavigate } from "react-router-dom"
import { Button,Icon } from 'semantic-ui-react'
export default function Footer() {
    let navigate = useNavigate()
    return(
        <>
        <footer>
            <div className='footer-content'>

                {/* <Link className='button' to='/stores'>See Stores</Link> */}
                <Button className='gray' size="massive" onClick={()=>{navigate('/')}}>See Stores</Button>
                <p className="credit">Designed and Developed by <a href="https://github.com/persefy" target="_blank"><Icon name='github icon'/>Stephanie Cancel</a></p>
                <p className="copy">&copy; 2024</p>
            </div>
        </footer>
        </>
    )
}