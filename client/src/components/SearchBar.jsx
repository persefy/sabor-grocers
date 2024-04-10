import { Button, FormInput, FormGroup, FormButton, Form } from 'semantic-ui-react'

export default function SearchBar() {
    
    return(
        <>
        <Form className="search-form hide-this">
          <FormGroup>
            <FormInput
              placeholder='search...'
              name='searchQuery'
              className='search-input'
            />
            <FormButton content='Search'/>
          </FormGroup>
        </Form>
        </>
    )
}