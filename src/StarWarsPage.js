import React, {Component} from 'react';
import Input from './Input.js';
import SearchButton from './SearchButton.js';
import Table from './Table.js';
import axios from 'axios';
import PageButtons from './PageButtons';

class StarWarsPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
     input : '',
     characters: [],
     isLoaded: false, 
     count: 0, 
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchCharacters = this.searchCharacters.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this); 
    this.getCharacters = this.getCharacters.bind(this); 
  }


  componentDidMount() {
    this.getCharacters(`https://swapi.dev/api/people`); 
  } 

  async getCharacters(url) { 
      const response = await axios.get(url)
      const count = response.data.count; 
      let characters = response.data.results; 
      
    characters = await Promise.all(characters.map(async character => { 
        character.homeWorld = await this.getHomeWorld(character.homeworld); 
        character.species = await this.getSpecies(character.species); 
        return character
    }))

    this.setState({
      characters, 
      isLoaded: true, 
      count
    }); 
  }


  async getHomeWorld(url) { 
    const response = await axios.get(url);
    return response.data.name;
  }

  async getSpecies(url) { 
    if (url.length === 0) { 
      return "Human"; 
    } else { 
      const response = await axios.get(url[0]); 
      return response.data.name; 
    }
  }

  searchCharacters(event) { 
    event.preventDefault(); 
    this.getCharacters(`https://swapi.dev/api/people/?search=${this.state.input}`); 
  }

  handleInputChange(e) {
    this.setState({input: e.target.value});  
  }

  handlePageChange(event) { 
    const pageNumber = event.target.id; 
    if (this.state.input === '') { 
      this.getCharacters(`https://swapi.dev/api/people/?page=${pageNumber}`);
    } else { 
      this.getCharacters(`https://swapi.dev/api/people/?search=${this.state.input}&page=${pageNumber}`);
    } 

     
  }


  render () {
    const {isLoaded} = this.state;
     return (
      <div>
        <div className='text-warning mt-5 w-75 border border-white rounded mx-auto'>
          <h1 className='d-flex justify-content-center display-3'>STAR WARS</h1>
          <form className='form'>
           <Input change={this.handleInputChange}/>
           <SearchButton click={this.searchCharacters}/>
          </form>
        </div>
        <div className='text-white'>
          {isLoaded ? 
          <Table characters={this.state.characters}/> 
          : <div className='d-flex justify-content-center m-5'>Loading...</div>} 
        </div>
        <div>
          <PageButtons 
            click={this.handlePageChange}
            count={this.state.count}>
          </PageButtons>
        </div>
      </div>
    )
  }
 }  

  
export default StarWarsPage;