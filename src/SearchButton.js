function SearchButton(props) {
    return (
      <div className='d-flex justify-content-center m-3'>
        <button 
          onClick={props.click} 
          className='btn btn-warning text-white'>Search</button>
      </div>
    ); 
}

export default SearchButton;