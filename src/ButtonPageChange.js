import React from 'react';


const ButtonPageChange = (props) => {
  return (
    <div className='d-flex justify-content-center m-3'>
      <button onClick={props.changePageCount} value="1" className='btn btn-warning text-white mx-1'>1</button>
      <button onClick={props.changePageCount} value="2" className='btn btn-warning text-white mx-1'>2</button>
      <button onClick={props.changePageCount} value="3" className='btn btn-warning text-white mx-1'>3</button>
      <button onClick={props.changePageCount} value="4" className='btn btn-warning text-white mx-1'>4</button>
      <button onClick={props.changePageCount} value="5" className='btn btn-warning text-white mx-1'>5</button>
      <button onClick={props.changePageCount} value="6" className='btn btn-warning text-white mx-1'>6</button>
      <button onClick={props.changePageCount} value="7" className='btn btn-warning text-white mx-1'>7</button>
      <button onClick={props.changePageCount} value="8" className='btn btn-warning text-white mx-1'>8</button>
      <button onClick={props.changePageCount} value="9" className='btn btn-warning text-white mx-1'>9</button>
    </div>
    )
}


export default ButtonPageChange;