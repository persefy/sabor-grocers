import { useNavigate } from "react-router-dom"
import { Button,Icon } from 'semantic-ui-react'
export default function Footer() {
    let navigate = useNavigate()
    return(
        <>
        <footer>
            <div className='footer-content'>
                <Button className='gray' size="massive" onClick={()=>{navigate('/stores')}}>See Stores</Button>
                <p className="credit">Designed and Developed by <a href="https://github.com/persefy" target="_blank"><Icon name='github'/>Stephanie Cancel</a></p>
                <p className="copy">&copy; 2024</p>
            </div>
        </footer>
        </>
    )
}