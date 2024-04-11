import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext  from '../DataContext';

export default function FreshFoods() {
    const { subcategoryData, setSubcategoryData, selectedSubcategory, setSelectedSubcategory} = useContext(DataContext);

    let navigate = useNavigate()

    useEffect(() => {
        const getSubCategory = async() => {
            const response = await axios.get(`http://localhost:8000/subcategories/`)
            setSubcategoryData(response.data)
            console.log(subcategoryData)
        }
        getSubCategory()
    }, [])

    let filteredSubCategories = []
    subcategoryData.forEach((subcategory) => {
        if (subcategory.category_id=='1') {
            filteredSubCategories.push(subcategory)
            console.log(`added ${subcategory.name}`)
        }
    })
    console.log(filteredSubCategories)

    if (!subcategoryData) {
        return <h1>Loading data...</h1>
    } else {
        return (
            <div className='main-content fresh-foods'>
                <h2>Fresh Foods</h2>
                <div className='subcategories-holder'>
                {filteredSubCategories.map(subcategory => (

                <div className='subcategory' key={subcategory.id} onClick={()=> {
                    navigate(`/results/${subcategory.name}`);
                    setSelectedSubcategory(subcategory.id);
                    }}>
                    <h3>{subcategory.name}</h3>
                    <div><img alt={subcategory.name} src={subcategory.image_url}/></div>
                </div>
                ))} 
                </div>
            </div>
        )
    }
}