function Input(props) {
    return (
      <div className='d-flex justify-content-center m-5'>
        <input 
          onChange={props.change} 
          className='form-control-sm bg-warning'>
        </input>
      </div>
    ); 
}

export default Input;