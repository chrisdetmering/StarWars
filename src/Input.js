import React from 'react';


const Input = (props) => {
    return (
      <div className='d-flex justify-content-center m-5'>
        <input type='text' name='searchInput' value={props.searchInput} onChange={props.handleInputChange} onClick={props.resetInputValue} className='form-control-sm bg-warning' required></input>
      </div>
    )
}


export default Input;