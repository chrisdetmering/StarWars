function createPageButtons(pageCount, click) { 
  const buttons = []; 

  for (let i = 1; i <= pageCount; i++) { 
    buttons.push(
      <button 
        key={i}
        onClick={click} 
        id={i} 
        className='btn btn-warning text-white mx-1'>{i}</button>
    )
  }

  return buttons; 
}


function PageButtons({click, count}) {
   const pageCount = Math.ceil(count / 10); 
  return (
    <div className='d-flex justify-content-center m-3'>
    {createPageButtons(pageCount, click)}
    </div>
  );
}


export default PageButtons;