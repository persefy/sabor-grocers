import searchIcon from '../assets/searchIcon.png'
export default function SearchBar() {
    
    return(
        <>
        <form className="search-form">
            <input type="text" placeholder='search...' className='search-input'
                onClick={()=> {
                    document.querySelector('.search-input').style.width = '50%'
            }}/>
            <button>
                
                {/* <span className='search-btn-text'> search</span> */}
                <img src={searchIcon} alt='search icon'/>
            </button>
        </form>
        </>
    )
}