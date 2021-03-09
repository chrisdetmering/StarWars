import React from 'react';

const Table = (props) => {
  const characters = props.characters;
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
            {characters.map(character => {
              return (
                <tr key={character.id}>
                <td>{character.name}</td>
                <td>{character.birth_year}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.homeworld}</td>
                <td>{character.species}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }


export default Table;