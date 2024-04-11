import { Button, FormInput, FormGroup, FormButton, Form} from 'semantic-ui-react'
import axios from "axios"
import { useState, useContext } from 'react'
import DataContext  from "../DataContext";
import { useNavigate } from "react-router-dom"

export default function SearchBar() {
  const { productSearchQuery, setProductSearchQuery } = useContext(DataContext);
  let navigate = useNavigate()

  //form code below
  const initialState = {
    searchQuery: '',
}

const [formState, setFormState] = useState(initialState);

const handleSubmit = async (event) => {
    event.preventDefault()
    //doing something with data

    const response = await axios.get('http://localhost:8000/products/')

    //console.log(response.data.meals)
    console.log(formState, productSearchQuery)

    //reverting to our initial state
    setFormState(initialState)
    
    if (formState.searchQuery!='') {
      // find matching value
      //get value?
      //then navigate...
    // navigate(`/searchResults/$`)
    }
}

const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
}
//form code above


    return(
        <>
        
        <Form className="search-form hide-this" onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              placeholder='product search...'
              name='searchQuery'
              className='search-input'
              onChange={handleChange}
              value={formState.searchQuery}
            />
            <FormButton content='Search' className='search-btn'onClick={()=> {
                if (formState.searchQuery!='') {
                  setProductSearchQuery(formState.searchQuery)
                } else {
                    console.log('Please enter search query to use this feature')
                }}}/>
          </FormGroup>
        </Form>
        </>
    )
}