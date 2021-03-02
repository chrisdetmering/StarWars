import React, {Component} from 'react';


class Input extends Component {
  render () {
    return (
      <div className='d-flex justify-content-center m-5'>
        <input onChange={this.props.onChange} onClick={this.props.onClick} className='form-control-sm bg-warning'></input>
      </div>
    )
  }
}

export default Input;