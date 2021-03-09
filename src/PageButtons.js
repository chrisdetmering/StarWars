import React from 'react';

const PagesButtons = (props) => {
  const {count} = props; 

  function createButtons() {
    const buttons = []; 
    const totalButtons = Math.ceil(count / 10); 
    for (let pageNum = 1; pageNum <= totalButtons; pageNum++) { 
      buttons.push(
        <button 
          onClick={props.click} 
          key={pageNum}
          value={pageNum} 
          className='btn btn-warning text-white mx-1'>
          {pageNum}
        </button>
      )
    }


    return buttons; 
  }


  return (
    <div className='d-flex justify-content-center m-3'>
      {createButtons()}
    </div>
    )
}


export default PagesButtons;