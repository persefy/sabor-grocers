import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
export default function StoreList() {

    const { id } = useParams()
    const [store, setStore] = useState()

    useEffect(() => {
        const getStore = async() => {
            const response = await axios.get(`http://localhost:8000/stores/${id}`)
            setStore(response.data)
        }
        getStore()
    }, [])
    return(
        <>

        {/* Customer facing view of all pages */}

        </>
    )
}