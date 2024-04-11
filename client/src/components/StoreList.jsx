import { useEffect, useState } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'

export default function StoreList({convertTime}) {

    const [stores, setStores] = useState()

    useEffect(() => {
        const getStore = async() => {
            const response = await axios.get(`http://localhost:8000/stores/`)
            setStores(response.data)

        }
        getStore()
    }, [])

    if (!stores) {
        return <h1>Loading stores...</h1>
    } else {
        return (
            <>
            <section className='store-page main-content'>
            <h2>Stores</h2>
            <p className='stores-intro-msg'>
                Strategically located in the surrounding neighborhoods to serve the greater Pinn City area folks. <br/>
                <strong>Come visit us at a store near you.</strong></p>
            <div className='stores-holder'>
                {stores.map(store => (
                    <div className='store' key={store.id}>
                        <div className='store-columns'>
                            <div  className='store-item'>
                                <h3>Store &#35;{store.store_no}</h3>
                                <div>
                                    <Icon name='map pin icon blue' size='large'/>
                                    <p className='store-address'>
                                        {store.street_address} <br/>
                                        {store.city}, {store.state}
                                    </p>
                                    <div className='store-pickup-enabled'>Store Pickup Available</div>
                                </div>
                                <p className='toggle-store-hours' onClick={()=>
                                    {
                                        document.querySelector('.store-hours').classList.toggle('hide-hours');
                                        document.querySelector('.hours-toggle-icon').classList.toggle('right')
                                        document.querySelector('.hours-toggle-icon').classList.toggle('down')
                                    }}>
                                    see hours <Icon className='hours-toggle-icon' name='caret right'/>
                                </p>
                            </div>
                            <div className='store-item'>
                                <img alt='store image' src={store.image_url}/>
                                <p><strong>Store Phone:</strong>&#43;1 {store.store_phone}</p>
                                <p className='store-msg'><strong>Manager's Message:</strong><br/>
                                    <span>{store.special_msg}</span>
                                </p>
                            </div>
                        </div>
                        <div className='store-hours hide-hours'>
                            <p><span>Sunday:</span> {convertTime(store.sunday_start_time)} &#8722; {convertTime(store.sunday_end_time)}</p>
                            <p><span>Monday:</span> {convertTime(store.sunday_start_time)} &#8722; {convertTime(store.sunday_end_time)}</p>
                            <p><span>Tuesday:</span> {convertTime(store.sunday_start_time)} &#8722; {convertTime(store.sunday_end_time)}</p>
                            <p><span>Wednesday:</span> {convertTime(store.sunday_start_time)} &#8722; {convertTime(store.sunday_end_time)}</p>
                            <p><span>Thursday:</span> {convertTime(store.sunday_start_time)} &#8722; {convertTime(store.sunday_end_time)}</p>
                            <p><span>Friday:</span> {convertTime(store.sunday_start_time)} &#8722; {convertTime(store.sunday_end_time)}</p>
                            <p><span>Saturday:</span> {convertTime(store.sunday_start_time)} &#8722; {convertTime(store.sunday_end_time)}</p>
                        </div>
                    </div>
                ))}

            </div>
            </section>

            </>
        )
    }
}