import React, {Component} from 'react';

class Table extends Component {
  render () {
    return (
      <div className='mt-5'>
        <table className='table table-striped table-bordered table-hover w-75 mx-auto'>
          <thead className='text-warning'>
           <tr>
             <th scope='col'>NAME</th>
             <th scope='col'>BIRTH YEAR</th>
             <th scope='col'>HEIGHT</th>
             <th scope='col'>MASS</th>
             <th scope='col'>HOMEWORLD</th>
             <th scope='col'>SPECIES</th>
           </tr>
          </thead>
          <tbody className='text-white'>
            {this.props.data}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;