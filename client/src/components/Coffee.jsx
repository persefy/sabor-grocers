import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext  from '../DataContext';

export default function Coffee() {
    const { subcategoryData, setSubcategoryData} = useContext(DataContext);

    let navigate = useNavigate()

    useEffect(() => {
        const getCategory = async() => {
            const response = await axios.get(`http://localhost:8000/subcategories/`)
            setSubcategoryData(response.data)
            console.log(subcategoryData)
        }
        getCategory()
    }, [])

    let freshFoodsSubCategories = []
    subcategoryData.forEach((subcategory) => {
        if (subcategory.category_id=='2') {
            freshFoodsSubCategories.push(subcategory)
            console.log(`added ${subcategory.name}`)
        }
    })
    console.log(freshFoodsSubCategories)
   
    if (!subcategoryData) {
        return <h1>Loading data...</h1>
    } else {
        return (
            <div className='main-content coffee'>
                <h2>Coffee</h2>
                <div className='subcategories-holder'>
                {freshFoodsSubCategories.map(subcategory => (

                <div className='subcategory' key={subcategory.id}>
                    <h3>{subcategory.name}</h3>
                    <div><img alt={subcategory.name} src={subcategory.image_url}/></div>
                </div>
                ))} 
                </div>
            </div>
        )
    }
}