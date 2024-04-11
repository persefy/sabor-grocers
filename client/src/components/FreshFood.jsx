import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext  from '../DataContext';

export default function FreshFoods() {
    const { categoryData, setCategoryData} = useContext(DataContext);
    const [categoryDataItem, setCategoryDataItem] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
        const getCategory = async() => {
            const response = await axios.get(`http://localhost:8000/categories/`)
            setCategoryData(response.data)
            setCategoryDataItem(response.data[0])
            console.log(categoryData)
        }
        getCategory()
    }, [])

    if (!categoryData) {
        return <h1>Loading data...</h1>
    } else {
        return (
            <div className='main-content fresh-foods'>
                <h2>Fresh Foods</h2>
                <div className='categories-holder'>
                {categories.map(category => (

                <div className='home-category' key={category.id}>
                <img alt={category.name} src={category.image_url}/>
                <div>{category.name}</div>
                </div>
                ))}
                </div>
            </div>
        )
    }
}