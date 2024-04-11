import { useEffect, useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext  from '../DataContext';
import { Icon, Button } from 'semantic-ui-react'

export default function FilteredResults() {
    const { subcategoryData, setSubcategoryData, selectedSubcategory, setSelectedSubcategory,products,setProducts, selectedProduct, setselectedProduct} = useContext(DataContext);
    const [selectedSubData, setSelectedSubData] = useState('')

    let navigate = useNavigate()

    useEffect(() => {
        const getCategory = async() => {
            const response = await axios.get(`http://localhost:8000/products/`)
            const response2 = await axios.get(`http://localhost:8000/subcategories/${selectedSubcategory}`)
            setProducts(response.data)
            setSelectedSubData(response2.data)
            console.log(products)
            console.log(selectedSubData)

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
    console.log(selectedSubcategory)

    if (!products) {
        return <h1>Loading data...</h1>
    } else {
        return (
            <>
            <div className="main-content results-page">
                <h2>Results</h2>
                    <h3>{selectedSubData.name}</h3>
                    <div className='results-holder'>
                        {filteredResults.map(result => (
                        <div className='result' key={result.id}>
                            <div className='flex-holder' onClick={()=> {
                            navigate(`/products/${result.short_description}`);
                            setselectedProduct(result.id)
                            }}>
                                <div><img alt={result.short_description} src={result.image_url}/></div>
                                <div>
                                    <h4 className='result-header'>{result.short_description}</h4>
                                    <p className='result-vendor'>{result.preferred_vendor}</p>
                                    <p className='result-description'>{result.details}</p>
                                    <p className='result-cost'>${result.average_cost}</p>
                                </div>
                            </div>
                            {/* <Button className='add-cart-item-btn green'><Icon name='plus' size='large'/></Button> */}
                        </div>
                        ))}  
                    </div>

            </div>
            </>
        )
    }
}