import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext  from '../DataContext';

export default function FilteredResults() {
    const { subcategoryData, setSubcategoryData, selectedSubcategory, setSelectedSubcategory,products,setProducts} = useContext(DataContext);
    let navigate = useNavigate()

    useEffect(() => {
        const getCategory = async() => {
            const response = await axios.get(`http://localhost:8000/products/`)
            const response2 = await axios.get(`http://localhost:8000/subcategories/`)
            setProducts(response.data)
            setSubcategoryData(response2.data)
            console.log(products)
            console.log(subcategoryData)
        }
        getCategory()
    }, [])

    let filteredResults = []
    products.forEach((product) => {
        if (product.subcategory_id==selectedSubcategory) {
            filteredResults.push(product)
            console.log(`added ${product.short_description}`)
        }
    })
    console.log(filteredResults)

    if (!subcategoryData) {
        return <h1>Loading data...</h1>
    } else {
        return (
            <>
            <div className="main-content results-page">
                <h2>Results</h2>
                    <h3>{subcategoryData[selectedSubcategory].name}</h3>
                    <div className='results-holder'>
                        {filteredResults.map(result => (
                        <div className='result' key={result.id} onClick={()=> {
                            navigate(`/products/${result.id}`)}}>
                            <div><img alt={result.short_description} src={result.image_url}/></div>
                            <div>
                                <h4 className='result-header'>{result.short_description}</h4>
                                <p className='result-vendor'>{result.preferred_vendor}</p>
                                <p className='result-description'>{result.details}</p>
                                <p className='result-cost'>${result.average_cost}</p>
                            </div>
                        </div>
                        ))}  
                    </div>

            </div>
            {/* Display results based on:
            
            - display products filtered by match for product name, subcategory
            
            */}
            </>
        )
    }
}