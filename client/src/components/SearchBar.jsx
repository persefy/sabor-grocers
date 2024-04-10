import { Button, FormInput, FormGroup, FormButton, Form } from 'semantic-ui-react'

export default function SearchBar() {
    
    return(
        <>
        
        <Form className="search-form">
          <FormGroup>
            <FormInput
              placeholder='search...'
              name='searchQuery'
            />
            <FormButton content='Search'/>
          </FormGroup>
        </Form>
        </>
    )
}