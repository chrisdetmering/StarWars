function Table(props) {
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
            {props.characters.map((character, i) => {
              return(
                <tr key={i}>
                  <td>{character.name}</td>
                  <td>{character.birth_year}</td>
                  <td>{character.height}</td>
                  <td>{character.mass}</td>
                  <td>{character.homeWorld}</td>
                  <td>{character.species}</td>
                </tr>
              )})}
          </tbody>
        </table>
      </div>
    ); 
}

export default Table;